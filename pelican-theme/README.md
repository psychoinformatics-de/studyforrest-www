# pelican-theme

This theme is derived from pelican-bootstrap3 by DandyDev (among others)
https://github.com/DandyDev/pelican-bootstrap3

## Usage

This theme honors the following standard Pelican settings:

* Putting feeds in the `<head>` section:
	* `FEED_ALL_ATOM`
* Template settings:
	* `MENUITEMS`
* Analytics
	* `GOOGLE_ANALYTICS` (classic tracking code)
	* `GOOGLE_ANALYTICS_UNIVERSAL` and `GOOGLE_ANALYTICS_UNIVERSAL_PROPERTY` (Universal tracking code)

The `tag_cloud` variable is for displaying tags. You can control the number of tags shown with: `TAG_CLOUD_MAX_ITEMS`

## Extras

### Article info

Set `SHOW_ARTICLE_AUTHOR` to True to show the author of the article at the top of the article and in the index of articles. Set `SHOW_ARTICLE_CATEGORY` to show the Category of each article. Set `SHOW_DATE_MODIFIED` to True to show the article modified date next to the published date.

### Pagination

Pelican-Bootstrap3 follows the standard Pagination settings of Pelican and uses the Bootstrap3 [Pagination component](http://getbootstrap.com/components/#pagination), but you can optionally use the Boostrap3 _Pager_ by setting `USE_PAGER` to `True`.

### Index page

* If `DISPLAY_ARTICLE_INFO_ON_INDEX` is set to _True_, article info (date, tags) will be show under the title for each article, otherwise only title and summary will be shown (default).

### Footer

The footer will display a copyright message using the AUTHOR variable and the year of the latest post. If a content license mark is enabled (see above), that will be shown as well.
