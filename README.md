jQuery Link Tracker Plugin
==========================

jQuery Link Tracker Plugin uses Google Analytics to keep track of users leaving your site, downloading files, or sending emails. Plugin works with the synchronous and asynchronous Google Analytics tracking code.

How to Use
----------

jQuery Link Tracker Plugin may be initialized at any time (usually at DOMReady).

	#JS

    (function($){
        $(document).ready(function(){
            jQuery('a').linkTracker({
                inDomain : true,
				fileTypes : [ 'pdf', 'zip', 'rar', 'tgz', 'gz', 'gzip', 'rar']
            });
        });
    })(jQuery);

For specific usage and options, please read the documentation or visit [http://vkurseweba.ru/blog/track-outbound-links-in-google-analytics-with-jquery)