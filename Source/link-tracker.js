/*
---
description: jQuery Link Tracker Plugin

authors:
  - Bekbulatov Alexander ( http://vkurseweba.ru/ )

license:
  - MIT-style license

requires:
	- jquery-1.3.js
	- jquery.url.js

...
*/

(function($){

    $.fn.linkTracker = function(opts) {
        var defaults = {
            inDomain : true,
            event : 'mouseup',
            fileTypes : [ 'pdf', 'zip', 'rar', 'tgz', 'gz', 'gzip', 'jpg', 'png', 'svg', 'gif', 'doc', 'eps', 'xls', 'ppt', 'xls', 'txt', 'vsd', 'js', 'css', 'rar', 'exe', 'wma', 'mov', 'avi', 'wmv', 'mp3']
        };

        var options = $.extend(defaults, opts);

        return this.each(function() {

            var track = function(){

                var $link = $(this),
                category = $link.data('ga_category'),
                action = $link.data('ga_action');

                if (!category || !action) return;

                if (typeof(pageTracker) == 'object') pageTracker._trackEvent(category, action, $link.attr('href'));
                else if(typeof(_gaq) == 'object') _gaq.push(['_trackEvent', category, action, $link.attr('href')])
                else throw('Google Analytics tracking object not found'); // if you need to throw errors;

            }

            $(this).each(function(){

                var $a = $(this),
                href = $a.attr('href');

                // if no href or it starts with #
                if (!href || /^#/.test(href)) return;

                // if it is mailto link
                if (/^mailto:/.test(href)) {
                    $a.data('ga_category', 'links');
                    $a.data('ga_action', 'mailto');
                }
                // otherwise
                else {
                    var wHost = options.inDomain ? location.host.match(/\w+\.\w+$/) : location.host,
                    file_type = $.inArray(href.substring(href.lastIndexOf('.')+1).toLowerCase(), options.fileTypes);
                    // if is not downloadable file
                    if (file_type == -1){
                        var aHost = $.url.setUrl(href).attr('host');
                        // if is relative url
                        if (!aHost || aHost == '..') return;

                        // if is internal absolute url
                        if (options.inDomain){
                            if(aHost.indexOf(wHost) != -1) return;
                        }
                        else {
                            if(aHost == wHost) return;
                        }
                        $a.data('ga_category', 'links');
                        $a.data('ga_action', 'outgoing');
                    }
                    // if is file
                    else {
                        $a.data('ga_category', 'downloads');
                        $a.data('ga_action', options.fileTypes[file_type]);
                    }
                }
                /* $a.html($a.html() + ' (+trackevent)'); */ // for debugging..
                $a.bind(options.event, track);
                /* $a.trigger(options.event); */ // for debugging..

            });

        });

    };
})(jQuery);