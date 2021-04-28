#!/usr/bin/env python3
import json
import requests
import argparse
from bs4 import BeautifulSoup


# define article PMC IDs for studyforrest articles from 2014 and 2016.
# Add more IDs here to extend the search:
pmc_ids = ['27779618', '27779621', '25977761']
# Simple HTML template that can be used to fill a table
html_template = """
    <tr>
      <td><a href={link}>{title}</a></td>
      <td>{authors}</td>
      <td>{venue}</td>
      <td>{year}</td>
      <td>{study}</td>
    </tr>"""


def scrape_pubmed_IDs(pmc_ids):
    """
    Scrape pubmed for all publications that cite the given articles
    :param pmc_ids: list of str, PMC identifiers of the articles
    :return: list of str, PMCID identifiers of citing research
    """
    # generate a query link from the PMCIDs
    base_link = \
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi?dbfrom=pubmed&linkname=pubmed_pmc_refs"
    for i in pmc_ids:
        base_link = base_link + f"&id={i}"
    print("Searching for citing research on PubMed...")
    response = requests.get(base_link)
    html_soup = BeautifulSoup(response.text, 'lxml')
    # parse all PMC IDs from the output, but exclude those from the original
    # articles (i.e., PMCIDs used as input)
    ids = [i.get_text() for i in html_soup.find_all('id')
           if i.get_text() not in pmc_ids]
    return ids


def update_metadata_db(ids, dbpath='article_database.json'):
    """
    Load the existing article database, and extend it with newly found IDs
    :param dbpath:
    :param ids:
    :return:
    """
    print("Updating the article database...")
    # using the IDs, get article metadata information
    metadata_link = \
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&id={}&retmode=json"
    try:
        with open(dbpath) as infile:
            metadata_db = json.load(infile)
    except FileNotFoundError:
        print(f"I could not find a database file "
              f"in the specified location: {dbpath}.\n "
              f"A new database will be created and saved at {dbpath}"
              )
        metadata_db = {}
    for i in ids:
        study = requests.get(metadata_link.format(i))
        studysoup = BeautifulSoup(study.text, 'lxml')
        # load the results from the request, corresponding to the article ID
        # sometimes, this glitches, and does not return data despite a 200
        # response. Catch this here:
        try:
            JSON = json.loads(studysoup.text)['result'][i]
        except Exception:
            # try again
            print(f"Retrying to fetch data for PMID {i} ...")
            study = requests.get(metadata_link.format(i))
            studysoup = BeautifulSoup(study.text, 'lxml')
            try:
                JSON = json.loads(studysoup.text)['result'][i]
            except Exception:
                print(f"I could not fetch data for PMID {i}.")
                continue
        # add a custom field for human input to the JSON.
        JSON['articletype'] = 'TODO'
        if i not in metadata_db.keys():
            print("""Found new citing research: {}.
                  It is listed under PMCID {}""".format(JSON['title'],
                                                        i))
            metadata_db[i] = JSON
    # write out the database
    with open(dbpath, 'w') as outfile:
        json.dump(metadata_db, outfile, indent=4)
    return metadata_db


def restructure_to_html(metadata_db):
    """
    Restructures article metadata into an HTML table
    :param metadata_db: Dict, article metadata
    :param ids: list of str, article ids
    :return: Saves an HTML table
    """
    print("Writing the database as an HTML table...")
    html = []
    for k, v in metadata_md.items():
        authors = ', '.join([v['authors'][i]['name'] for
                             i in range(len(v['authors']))])
        title = v['title']
        date = v['pubdate'][:4]
        # construct a doi url
        url = 'https://www.doi.org/' + \
              [v['articleids'][i]['value']
               for i in range(len(v['articleids']))
               if v['articleids'][i]['idtype'] == 'doi'][0]
        journal = v['fulljournalname']
        if v['articletype'] == 'TODO':
            # this has not been altered by a human yet. By default,
            # we regard this article as a citation only
            ptype = 'Citing'
        else:
            ptype = v['articletype']
        html.append(html_template.format(link=url,
                                         title=title,
                                         authors=authors,
                                         venue=journal,
                                         year=date,
                                         study=ptype
                                         )
                    )
        html = sorted(html, reverse=True, key=lambda i: i.split()[-3])
        publication_table = '\n'.join(html)
        table_head = """  <table id='sort-me'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Journal</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>"""

        table_tail = """
          </tbody>
          </table>"""

        # write the HTML output to a file
        fulltable = table_head + publication_table + table_tail
        with open('publications.html', 'w') as outfile:
            outfile.write(fulltable)


def parse_args():
    formatter_class = argparse.RawDescriptionHelpFormatter
    parser = argparse.ArgumentParser(
        formatter_class=formatter_class,
        description="""
        A small helper tool to query PubMed for citing research of
        StudyForrest data.

        Usage: Run the script to query for citations of the 2014 and 2016
        StudyForrest publications, update a database (expected to lie in the
        current directory) with article metadata, and generate an HTML table
        as output in the current directly.
        With --nohtml, the HTML table will not be updated.
        With --ids, different PMCIDs can be specified - the tool will then
        add citations of those studies into the database.

        In order to amend database records with publication types, manually
        add a classification of 'articletype' (Citing, Data, Study) to
        differentiate articles that cite StudyForrest, contribute new data,
        or use the data in analyses.
        """
    )
    parser.add_argument(
        "--database",
        "-d",
        metavar="<DB_PATH>",
        help="""Path to the database file""",
    )
    parser.add_argument(
        "--ids",
        nargs="+",
        default=pmc_ids,
        metavar="<PMCID>",
        help="""PMC ID of all studies for which citation data should be
          returned. Should be supplied as '27779618' '27779621' for two
          studies. By default, it searches for 3 pubs (data descriptors from
          2014 and 2016)""",
    )
    parser.add_argument(
        "--nohtml",
        action="store_true",
        help="""If given, no HTML table rendering is produced.""",
    )
    args = parser.parse_args()
    return args


if __name__ == "__main__":
    args = parse_args()
    # this will default to the three IDs specified at the top of the script
    pmc_ids = args.ids
    # get the IDs of citing research
    ids = scrape_pubmed_IDs(pmc_ids)
    dp_path = args.database if args.database is not None \
        else 'article_database.json'
    metadata_md = update_metadata_db(ids, dbpath=dp_path)
    if not args.nohtml:
        restructure_to_html(metadata_md)
    else:
        print("The database was updated but the HTML table was not.")
