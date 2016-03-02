# pelican-theme

This theme is derived from pelican-bootstrap3 by DandyDev (among others)
https://github.com/DandyDev/pelican-bootstrap3

## Usage

This theme honors the following standard Pelican settings:

* Putting feeds in the `<head>` section:
	* `FEED_ALL_ATOM`
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

### Pagination

Pelican-Bootstrap3 follows the standard Pagination settings of Pelican and uses the Bootstrap3 [Pagination component](http://getbootstrap.com/components/#pagination), but you can optionally use the Boostrap3 _Pager_ by setting `USE_PAGER` to `True`.

### Site Brand

You can provide a logo for your site using `SITELOGO`. For example: `SITELOGO = 'images/my_site_logo.png'`. You can then define the size of the logo using `SITELOGO_SIZE`. The `width` of the `<img>` element will be set accordingly.

By default the `SITENAME` will be shown as well. It's also possible to hide the site name using the `HIDE_SITENAME` flag.

### Related Posts

This theme has support for the [Related Posts plugin](https://github.com/getpelican/pelican-plugins/tree/master/related_posts). All you have to do, is enable the plugin, and the theme will do the rest.

### Series

This theme supports the [Series plugin](https://github.com/getpelican/pelican-plugins/tree/master/series). If you enable the plugin you will find in the footer the links to the previous and next articles in the series.

You may customize the header of this list setting the `SERIES_TEXT` variable, which can also include the `index` and `name` variables. The first is the index of the current article in the series (starting from 1) and the second is the name of the series. The default string is `Part %(index)s of the %(name)s series`.

You may display information on the series just under the article title setting `SHOW_SERIES` to `True`.

### Index page

* If `DISPLAY_ARTICLE_INFO_ON_INDEX` is set to _True_, article info (date, tags) will be show under the title for each article, otherwise only title and summary will be shown (default).

### Short menu labels for pages

By default, the title of a page is used both for showing the title as
part of a page's content, and, if pages in menu is enabled, as the
label of the corresponding menu item. You can choose a different label
for the menu (such as a short single word) than the page title by adding a
Menulabel metadata attribute to the page header (`Menulabel:` in
markdown, `:Menulabel:` in rst).

### Twitter Timeline

To enable, provide a `TWITTER_USERNAME` and a `TWITTER_WIDGET_ID`.

To get a `TWITTER_WIDGET_ID`, go to: https://twitter.com/settings/widgets and select `Create new`. You'll find the TWITTER_WIDGET_ID under the html or in the site url:

`https://twitter.com/settings/widgets/TWITTER_WIDGET_ID/edit`

### AddThis

You can enable sharing buttons through [AddThis](http://www.addthis.com/) by setting `ADDTHIS_PROFILE` to your AddThis profile-id. This will display a **Tweet**, **Facebook Like** and **Google +1** button under each post.

* AddThis automatically adds a short hashtag to the end of your URLs. This lets you reveal how often visitors copy your URL from their address bar to share. Example of URL: `http://domain.com/page.html#UF0983`. This function can be disabled by setting `ADDTHIS_DATA_TRACK_ADDRESSBAR` to _False_.
* All social buttons are enabled by default. You can disable certain button by setting following properties to _False_: `ADDTHIS_FACEBOOK_LIKE`, `ADDTHIS_TWEET`, `ADDTHIS_GOOGLE_PLUSONE`.

### Footer

The footer will display a copyright message using the AUTHOR variable and the year of the latest post. If a content license mark is enabled (see above), that will be shown as well.
