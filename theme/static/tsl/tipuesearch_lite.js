/*
Tipue Search 7.1
Copyright (c) 2019 Tipue, 2020 Jona Fischer and Alex Waite
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/

// Stop words list from http://www.ranks.nl/stopwords
var tipuesearch_stop_words = ["a", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];

// Weighting
var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 60},
     {'url': 'http://www.tipue.com/search', 'score': 60},
     {'url': 'http://www.tipue.com/tipr', 'score': 30},
     {'url': 'http://www.tipue.com/support', 'score': 20}
]};

// Illogical stemming
var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};

// Timer for showTime
var startTimer = new Date().getTime();


window.onload = function execute(){
    var set = {
        "contextBuffer": 60,
        "contextLength": 60,
        "contextStart": 90,
        "debug": false,
        "descriptiveWords": 25,
        "highlightTerms": true,
        "minimumLength": 3,
        "newWindow": false,
        "showContext": true,
        "showTime": true,
        "showTitleCount": true,
        "showURL": false,
        "wholeWords": true
    };
    var tipuesearch_t_c = 0;
    var tipue_search_w = "";
    if (set.newWindow) {
        tipue_search_w = " target='_blank'";
    }
    let params = new URLSearchParams(document.location.search.substring(1));

    document.getElementById("tipue_search_input").value = params.get("q");
    getTipueSearch();

    function getTipueSearch() {
        var out = "";
        var show_stop = false;
        var standard = true;
        var c = 0;
        var found = [];
        var d_o = document.getElementById("tipue_search_input").value;
        d_o = d_o.replace(/\+/g, " ").replace(/\s\s+/g, " ");
        d_o = d_o.trim();
        var d = d_o.toLowerCase();
        if ((d.match("^\"") && d.match("\"$")) ||
        (d.match("^'") && d.match("'$"))) {
            standard = false;
        }
        var d_w = d.split(" ");

        if (standard) {
            d = "";
            for (var i = 0; i < d_w.length; i++) {
                var a_w = true;
                for (var f = 0; f < tipuesearch_stop_words.length; f++) {
                    if (d_w[i] == tipuesearch_stop_words[f]) {
                        a_w = false;
                        show_stop = true;
                    }
                }
                if (a_w) {
                    d = d + " " + d_w[i];
                }
            }
            d = d.trim();
            d_w = d.split(" ");
        } else {
            d = d.substring(1, d.length - 1);
        }
        if (d.length >= set.minimumLength) {
            if (standard) {
                var d_t = d;
                for (var i = 0; i < d_w.length; i++) {
                    for (var f = 0; f < tipuesearch_stem.words.length; f++) {
                        if (d_w[i] == tipuesearch_stem.words[f].word) {
                            d_t = d_t + " " + tipuesearch_stem.words[f].stem;
                        }
                    }
                }
                d_w = d_t.split(" ");
                for (var i = 0; i < tipuesearch.pages.length; i++) {
                    var score = 0;
                    var s_t = tipuesearch.pages[i].text;

                    score = tipue_KMP(d_w, s_t, set, i);

                    if (score != 0) {
                        found.push({
                            "score": score,
                            "title": tipuesearch.pages[i].title,
                            "desc": s_t,
                            "url": tipuesearch.pages[i].url,
                            "note": tipuesearch.pages[i].note
                        });
                        c++;
                    }
                }
            } else {
                d_w = d.split(" ");
                for (var i = 0; i < tipuesearch.pages.length; i++) {
                    var score = 0;
                    var s_t = tipuesearch.pages[i].text;

                    score = tipue_KMP(d_w, s_t, set, i);

                    if (score != 0) {
                        found.push({
                            "score": score,
                            "title": tipuesearch.pages[i].title,
                            "desc": s_t,
                            "url": tipuesearch.pages[i].url,
                            "note": tipuesearch.pages[i].note
                        });
                        c++;
                    }
                }
            }
            if (c != 0) {
                if (set.showTitleCount && tipuesearch_t_c == 0) {
                    var title = document.title;
                    document.title = "(" + c + ") " + title;
                    tipuesearch_t_c++;
                }
                if (c == 1) {
                    out += "<div id='tipue_search_results_count'>1 result";
                } else {
                    var c_c = c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    out += "<div id='tipue_search_results_count'>" + c_c + " results";
                }
                if (set.showTime) {
                    var endTimer = new Date().getTime();
                    var time = (endTimer - startTimer) / 1000;
                    out += " (" + time.toFixed(2) + " seconds)";
                }
                out += "</div>";

                found.sort(function(a, b) {
                    return b.score - a.score
                });
                var l_o = 0;
                for (var i = 0; i < found.length; i++) {
                    out += "<div class='tipue_search_result'>";
                    out += "<div class='tipue_search_content_title'><a href='" + found[i].url + "'" + tipue_search_w + ">" + found[i].title + "</a></div>";
                    if (set.debug) {
                        out += "<div class='tipue_search_content_debug'>Score: " + found[i].score + "</div>";
                    }
                    if (set.showURL) {
                        out += "<div class='tipue_search_content_url'><a href='" + found[i].url + "'" + tipue_search_w + ">" + found[i].url + "</a></div>";
                    }
                    if (found[i].desc) {
                        var t = found[i].desc;
                        if (set.showContext) {
                            d_w = d.split(" ");
                            var s_1 = found[i].desc.toLowerCase().indexOf(d_w[0]);
                            if (s_1 > set.contextStart) {
                                var t_1 = t.substr(s_1 - set.contextBuffer);
                                var s_2 = t_1.indexOf(" ");
                                t_1 = t.substr(s_1 - set.contextBuffer + s_2);
                                t_1 = t_1.trim();
                                if (t_1.length > set.contextLength) {
                                    t = "... " + t_1;
                                }
                            }
                        }
                        if (standard) {
                            d_w = d.split(" ");
                            for (var f = 0; f < d_w.length; f++) {
                                if (set.highlightTerms) {
                                    var patr = new RegExp("(" + d_w[f] + ")", "gi");
                                    t = t.replace(patr, "<h0011>$1<h0012>");
                                }
                            }
                        } else if (set.highlightTerms) {
                            var patr = new RegExp("(" + d + ")", "gi");
                            t = t.replace(patr, "<span class=\"tipue_search_content_bold\">$1</span>");
                        }
                        var t_d = "";
                        var t_w = t.split(" ");
                        if (t_w.length < set.descriptiveWords) {
                            t_d = t;
                        } else {
                            for (var f = 0; f < set.descriptiveWords; f++) {
                                t_d += t_w[f] + " ";
                            }
                        }
                        t_d = t_d.trim();
                        if (t_d.charAt(t_d.length - 1) != ".") {
                            t_d += " ...";
                        }
                        t_d = t_d.replace(/h0011/g, "span class=\"tipue_search_content_bold\"");
                        t_d = t_d.replace(/h0012/g, "/span");
                        out += "<div class='tipue_search_content_text'>" + t_d + "</div>";
                    }
                    if (found[i].note) {
                        out += "<div class='tipue_search_note'>" + found[i].note + "</div>";
                    }
                    out += "</div>";
                    l_o++;
                }
            } else {
                out += "<div id='tipue_search_error'>No search results for '" + d_o + "'.</div>";
            }
        } else {
            if (show_stop) {
                out += "<div id='tipue_search_error'>No search results for '" + d_o + "'. Most common words are ignored.</div>";
            } else {
                if (set.minimumLength == 1) {
                    out += "<div id='tipue_search_error'>The search term should be one character or more.</div>";
                } else {
                    out += "<div id='tipue_search_error'>The search term should be " + set.minimumLength + " characters or more.</div>";
                }
            }
        }
        document.getElementById("tipue_search_content").innerHTML = out;
    }

    // -------------------- SEARCH ALGORITHM ------------------------
    function KMP_prefix(pattern, pattern_len){
        // length of found prefix
        var prefix_len = -1;

        // Start value is always -1
        var prefix_table = [];
        prefix_table.push(prefix_len);

        for (var position_in_pattern = 0; position_in_pattern < pattern_len; position_in_pattern++){
        // if prefix is too long, shorten it
        while (prefix_len >= 0 && pattern[prefix_len] !== pattern[position_in_pattern]){
            prefix_len = prefix_table[prefix_len];
        }

        // at this point prefix_len == -1 or pattern[position_in_pattern] == pattern[prefix_len]
        prefix_len = prefix_len + 1;
        prefix_table.push(prefix_len);
        }
        return prefix_table;
    }


    function KMP_search(pattern, prefix_table, text){
        var position_in_pattern = 0;
        var cnt = 0;
        var pattern_len = pattern.length;

        for (var position_in_text = 0; position_in_text < text.length; position_in_text++){
            // move pattern until text and pattern match
            while (position_in_pattern >= 0 && text[position_in_text].toLowerCase() !== pattern[position_in_pattern].toLowerCase()){
                // use prefix-table
                position_in_pattern = prefix_table[position_in_pattern];
            }

            position_in_pattern = position_in_pattern + 1

            // in case end of pattern is reached
            if (position_in_pattern === pattern_len){
                // register match
                //console.log("Match at position "+ (position_in_text - pattern_len).toString() +".");
                cnt++;
                // move pattern
                position_in_pattern = prefix_table[position_in_pattern];
            }
        }
        return cnt;
    }

    function tipue_KMP(d_w, s_text, set, i){
        var score = 0;
        for(var f=0;f<d_w.length;f++){
            var pre_tab = KMP_prefix(d_w[f], d_w[f].length);
            var match_cnt = KMP_search(d_w[f], pre_tab, tipuesearch.pages[i].title);
            if(match_cnt != 0){
                score+=(20*match_cnt);
            }
            match_cnt = KMP_search(d_w[f], pre_tab, s_text);
            if(match_cnt != 0){
                score+=(20*match_cnt);
            }

            if(tipuesearch.pages[i].tags){
                match_cnt = KMP_search(d_w[f], pre_tab, tipuesearch.pages[i].tags);
                if(match_cnt != 0){
                    score+=(10*match_cnt);
                }
            }
            match_cnt = KMP_search(d_w[f], pre_tab, tipuesearch.pages[i].url);
            if(match_cnt != 0){
                score+=20;
            }
            if(score!=0){
                for(var e=0;e<tipuesearch_weight.weight.length;e++){
                    if(tipuesearch.pages[i].url==tipuesearch_weight.weight[e].url){
                        score+=tipuesearch_weight.weight[e].score;
                    }
                }
            }
            if(d_w[f].match("^-")){
                pat=new RegExp(d_w[f].substring(1),"i");
                if(KMP_search(d_w[f], pre_tab, tipuesearch.pages[i].title)!=0||KMP_search(d_w[f], pre_tab, s_text)!=0||KMP_search(d_w[f], pre_tab, tipuesearch.pages[i].tags)!=0){
                    score=0;
                }
            }
        }
        return score;
    }
};
