$(document).ready(function(){
	$('.mainContent a:not(.dontate-btn), .playButton').click(function() {
		$.fancybox({
				'padding'		: 0,
				'autoScale'		: false,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none',
				'title'			: this.title,
				'width'		: 680,
				'height'		: 495,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				   	 'wmode'		: 'transparent',
					'allowfullscreen'	: 'true'
				}
			});

		return false;
	});

	$('.search_wrap_inner_right').click(function(){
		$('.search_wrap').toggleClass('search_opened');
		$('.social_wrap').toggleClass('social_closed');
	})
});

