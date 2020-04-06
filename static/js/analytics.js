(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-128638499-1', 'auto');

// enhanced link attribution
ga('require', 'linkid', {
  'cookieName': '_ela',
  'duration': 45,
  'levels': 5
});

ga('send', 'pageview');

$(function() {
	$('a').click(function(e) {
		var $this = $(this),
			href = $this.attr('href'),  // must use $a.attr('href')
			label = $this.parents('.ga-label')[0].id;
		var ga_opts = {
			hitType: 'event',
			eventCategory: label,
		};
		if (href.startsWith('#')) {
			// navigation link
			ga_opts['eventAction'] = 'link_nav';
			// target element id, e.g. page-top
			ga_opts['eventLabel'] = href.slice(1);
		} else if (this.hostname.indexOf('https://panwliu.github.io/') > -1) {
			// internal link
			ga_opts['eventAction'] = 'link_int';
			// target file, e.g. me.jpg
			ga_opts['eventLabel'] = href.split('/').slice(-1)[0];
		} else {
			// external link
			ga_opts['eventAction'] = 'link_ext';
			// entire href
			ga_opts['eventLabel'] = href;
		}
		ga('send', ga_opts);
	});
});

