# pelican-theme

This theme is derived from pelican-bootstrap3 by DandyDev (among others)
https://github.com/DandyDev/pelican-bootstrap3

## Usage

This theme honors the following standard Pelican settings:

* Putting feeds in the `<head>` section:
	* `FEED_ALL_ATOM`
	* `FEED_ALL_RSS`
* Template settings:
	* `DISPLAY_PAGES_ON_MENU`
	* `DISPLAY_CATEGORIES_ON_MENU`
	* `MENUITEMS`
	* `LINKS`
* Analytics
	* `GOOGLE_ANALYTICS` (classic tracking code)
	* `GOOGLE_ANALYTICS_UNIVERSAL` and `GOOGLE_ANALYTICS_UNIVERSAL_PROPERTY` (Universal tracking code)

The `tag_cloud` variable is for displaying tags. You can control the number of tags shown with: `TAG_CLOUD_MAX_ITEMS`

## Extras

### Article info

Set `SHOW_ARTICLE_AUTHOR` to True to show the author of the article at the top of the article and in the index of articles. Set `SHOW_ARTICLE_CATEGORY` to show the Category of each article. Set `SHOW_DATE_MODIFIED` to True to show the article modified date next to the published date.

### Custom CSS

If you want to add custom css to the theme, without having to clone and maintain your own version of the theme, you can use the `CUSTOM_CSS` variable. The value is the location where you tell Pelican to put the file (see below):

```
CUSTOM_CSS = 'static/custom.css'
```

To tell Pelican to copy the relevant file to the desired destination, add the path to `STATIC_PATHS` and the destination to `EXTRA_PATH_METADATA`, like so:

```
# Tell Pelican to add 'extra/custom.css' to the output dir
STATIC_PATHS = ['images', 'extra/custom.css']

# Tell Pelican to change the path to 'static/custom.css' in the output dir
EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'static/custom.css'}
}
```

### Pagination

Pelican-Bootstrap3 follows the standard Pagination settings of Pelican and uses the Bootstrap3 [Pagination component](http://getbootstrap.com/components/#pagination), but you can optionally use the Boostrap3 _Pager_ by setting `USE_PAGER` to `True`.

### Site Brand

You can provide a logo for your site using `SITELOGO`. For example: `SITELOGO = 'images/my_site_logo.png'`. You can then define the size of the logo using `SITELOGO_SIZE`. The `width` of the `<img>` element will be set accordingly.

By default the `SITENAME` will be shown as well. It's also possible to hide the site name using the `HIDE_SITENAME` flag.

### Breadcrumbs

It's possible to show breadcrumbs in your site using the `DISPLAY_BREADCRUMBS` flag. By default the article category isn't shown in the breadcrumbs, if you wish to enable it, set the `DISPLAY_CATEGORY_IN_BREADCRUMBS` flag to _True_.

### Navbar

If you wish to use the inverse navbar from Bootstrap, set the flag `BOOTSTRAP_NAVBAR_INVERSE` to _True_.

### Related Posts

This theme has support for the [Related Posts plugin](https://github.com/getpelican/pelican-plugins/tree/master/related_posts). All you have to do, is enable the plugin, and the theme will do the rest.

### Series

This theme supports the [Series plugin](https://github.com/getpelican/pelican-plugins/tree/master/series). If you enable the plugin you will find in the footer the links to the previous and next articles in the series.

You may customize the header of this list setting the `SERIES_TEXT` variable, which can also include the `index` and `name` variables. The first is the index of the current article in the series (starting from 1) and the second is the name of the series. The default string is `Part %(index)s of the %(name)s series`.

You may display information on the series just under the article title setting `SHOW_SERIES` to `True`.

### IPython Notebook support

This theme supports including IPython notebooks through the [Liquid Tags plugin](https://github.com/getpelican/pelican-plugins/tree/master/liquid_tags). If you enable the plugin, the theme will automatically include the right CSS/JS to make the notebooks work.

### Favicon

Set the `FAVICON` option in your `pelicanconf.py`. For example: `FAVICON = 'images/favicon.png'`

### Index page

* If `DISPLAY_ARTICLE_INFO_ON_INDEX` is set to _True_, article info (date, tags) will be show under the title for each article, otherwise only title and summary will be shown (default).

### Short menu labels for pages

By default, the title of a page is used both for showing the title as
part of a page's content, and, if pages in menu is enabled, as the
label of the corresponding menu item. You can choose a different label
for the menu (such as a short single word) than the page title by adding a
Menulabel metadata attribute to the page header (`Menulabel:` in
markdown, `:Menulabel:` in rst).

### reStructuredText styles

If you're using reStructuredText for writing articles and pages, you can include the extra CSS styles that are used by the `docutils`-generated HTML by setting `DOCUTIL_CSS` to True. This can be done as a global setting or  setting it in the metadata of a specific article or page.

### Facebook Open Graph

In order to make the Facebook like button and other social sharing options work better, the template contains Open Graph metatags like `<meta property="og:type" content="article"/>`. You can disable them by setting `USE_OPEN_GRAPH` to _False_. You can use `OPEN_GRAPH_FB_APP_ID` to provide a Facebook _app id_.
You can also provide a default image that will be passed as an Open Graph tag  by setting `OPEN_GRAPH_IMAGE` to a relative file path, which will be prefixed by your site's base url. Optionally, you can override this default image on a per article and per page basis, by setting the `og_image` variable in an article or page.

### Twitter Cards

The theme supports [Summary Twitter Cards](https://dev.twitter.com/docs/cards/types/summary-card). To activate the necessary tags set `TWITTER_CARDS` to `True`. Because _Twitter Cards_ also use Open Graph tags to identify some of the necessary metadata, `USE_OPEN_GRAPH` must also be set to `True` (which is the default).

You can optionally provide a `TWITTER_USERNAME` which will be used to set the Twitter username for the site and for the content creator.

The same image options for Open Graph (see above) can be used for setting images that appear on Twitter Cards. So if you have set an `OPEN_GRAPH_IMAGE` and optionally `og_image` for articles and/or pages, you're good to go for Twitter Cards as well.

### Twitter Timeline

To enable, provide a `TWITTER_USERNAME` and a `TWITTER_WIDGET_ID`.

To get a `TWITTER_WIDGET_ID`, go to: https://twitter.com/settings/widgets and select `Create new`. You'll find the TWITTER_WIDGET_ID under the html or in the site url:

`https://twitter.com/settings/widgets/TWITTER_WIDGET_ID/edit`

### AddThis

You can enable sharing buttons through [AddThis](http://www.addthis.com/) by setting `ADDTHIS_PROFILE` to your AddThis profile-id. This will display a **Tweet**, **Facebook Like** and **Google +1** button under each post.

* AddThis automatically adds a short hashtag to the end of your URLs. This lets you reveal how often visitors copy your URL from their address bar to share. Example of URL: `http://domain.com/page.html#UF0983`. This function can be disabled by setting `ADDTHIS_DATA_TRACK_ADDRESSBAR` to _False_.
* All social buttons are enabled by default. You can disable certain button by setting following properties to _False_: `ADDTHIS_FACEBOOK_LIKE`, `ADDTHIS_TWEET`, `ADDTHIS_GOOGLE_PLUSONE`.

### Tipue Search

This theme has support for the
[Tipue Search plugin](https://github.com/getpelican/pelican-plugins/tree/master/tipue_search).

All you have to do, is:
- enable the plugin, and the theme will add a search box on the right
  side of the menu
- Add `'search'` to the `DIRECT_TEMPLATES` in your `pelicanconf.py`. E.g. `DIRECT_TEMPLATES = ('index', 'categories', 'authors', 'archives', 'search').
By default, the Tipue search page is configured at "/search.html", but you can override that with the `SEARCH_URL` 
setting, which comes in handy if you have fancy rewrite rules in your Apache or Nginx configuration.

### Footer

The footer will display a copyright message using the AUTHOR variable and the year of the latest post. If a content license mark is enabled (see above), that will be shown as well.
