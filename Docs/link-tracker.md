jQuery Link Tracker Plugin
==========================

jQuery Link Tracker Plugin uses Google Analytics to keep track of users leaving your site, downloading files, or sending emails. Plugin works with the synchronous and asynchronous Google Analytics tracking code.

Plugin uses event [pageTracker._trackEvent()](http://code.google.com/intl/ru/apis/analytics/docs/tracking/eventTrackerGuide.html), so your statistics won't be mixed up with visited pages. You statistics will be in the section: Content -> Event tracking -> Event Tracking Overview.

jQuery Link Tracker Plugin requires [jQuery URL Parser](http://github.com/allmarkedup/jQuery-URL-Parser).

### Syntax:

    jQuery('a').linkTracker(options);

### Options:

* inDomain - (*boolean*, defaults to true) If true is passed, links to subdomains of your domain aren't outgoing,
* event - (*string*, defaults to 'mouseup') Event to bind the tracking action to,
* fileTypes - (*array*, defaults to [ 'pdf', 'zip', 'rar', 'tgz', 'gz', 'gzip', 'jpg', 'png', 'svg', 'gif', 'doc', 'eps', 'xls', 'ppt', 'xls', 'txt', 'vsd', 'js', 'css', 'rar', 'exe', 'wma', 'mov', 'avi', 'wmv', 'mp3']) The list of file extensions that should be tracked as downloadable files.