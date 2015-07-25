/**
Pixity - The responsive image replacement utility
Written by Phil (dutsonpa) / ICON Health & Fitness
Version 1.131105

https://github.com/dutsonpa/pixity
<img class="pixity" src="images/placeholder.gif" alt="Pixity test" data-path="images" data-sm="small.jpg" data-md="medium.jpg" data-lg="large.jpg" data-xl="xlarge.jpg" data-webp="true" />

**/

;(function($){
	$.pixity = function(options) {
		var settings = $.extend(
			{
				imgClass: 'pixity',
				limitSm: 479,
				limitMd: 767,
                limitLg: 959
			},
			options
		);
        
		var domNode = $('.'+settings.imgClass);
		var cw = document.documentElement.clientWidth;
        //console.log(domNode.data('webp'));
        if (domNode.data('webp') ) {
            
            settings = $.extend(
			{
				webp: true
			},
			settings
		);
        //console.log(domNode.data('webp'));
            //console.log(settings.webp);
            
        }

		var imgSm = function() {
			domNode.each(function() {
				var $this = $(this);
                //console.log(settings.webp);
                settings.webp ? $this.attr('src',$this.data('path') +'/'+$this.data('sm').split('.')[0] + '.webp') : $this.attr('src',$this.data('path') +'/'+$this.data('sm'));
			});
		};
		var imgMd = function() {
			domNode.each(function() {
				var $this = $(this);
				settings.webp ? $this.attr('src',$this.data('path') +'/'+$this.data('md').split('.')[0] + '.webp') : $this.attr('src',$this.data('path') +'/'+$this.data('md'));
			});
		};
		var imgLg = function() {
			domNode.each(function() {
				var $this = $(this);
				settings.webp ? $this.attr('src',$this.data('path') +'/'+$this.data('lg').split('.')[0] + '.webp') : $this.attr('src',$this.data('path') +'/'+$this.data('lg'));
			});
		};
        var imgXl = function() {
			domNode.each(function() {
				var $this = $(this);
				settings.webp ? $this.attr('src',$this.data('path') +'/'+$this.data('xl').split('.')[0] + '.webp') : $this.attr('src',$this.data('path') +'/'+$this.data('xl'));
			});
		};

		if (cw <= settings.limitSm) {
			imgSm(domNode);
		} else if (cw <= settings.limitMd) {
			imgMd(domNode);
		} else if (cw <= settings.limitLg) {
			imgLg(domNode);
		} else {
			imgXl(domNode);
		}
	}
})(jQuery);