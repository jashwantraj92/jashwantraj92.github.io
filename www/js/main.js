(function($){var settings={parallax:true,parallaxFactor:20};skel.breakpoints({xlarge:'(max-width: 1800px)',large:'(max-width: 1280px)',medium:'(max-width: 980px)',small:'(max-width: 736px)',xsmall:'(max-width: 480px)'});$(function(){var $window=$(window),$body=$('body'),$header=$('#header'),$footer=$('#footer'),$main=$('#main');$body.addClass('is-loading');$window.on('load',function(){$body.removeClass('is-loading');});if(skel.vars.mobile){$body.addClass('is-touch');window.setTimeout(function(){$window.scrollTop($window.scrollTop()+1);},0);}$('form').placeholder();skel.on('+medium -medium',function(){$.prioritize('.important\\28 medium\\29',skel.breakpoint('medium').active);});skel.on('+medium',function(){$footer.insertAfter($main);});skel.on('-medium !medium',function(){$footer.appendTo($header);});if(skel.vars.browser=='ie'||skel.vars.mobile)settings.parallax=false;if(settings.parallax){skel.on('change',function(){if(skel.breakpoint('medium').active){$window.off('scroll.strata_parallax');$header.css('background-position','top left, center center');}else{$header.css('background-position','left 0px');$window.on('scroll.strata_parallax',function(){$header.css('background-position','left '+(-1*(parseInt($window.scrollTop())/settings.parallaxFactor))+'px');});}});$window.on('load',function(){$window.triggerHandler('scroll');});}$window.on('load',function(){$('#two').poptrox({caption:function($a){return $a.next('h3').text();},overlayColor:'#2c2c2c',overlayOpacity:0.85,popupCloserText:'',popupLoaderText:'',selector:'.work-item a.image',usePopupCaption:true,usePopupDefaultStyling:false,usePopupEasyClose:false,usePopupNav:true,windowMargin:(skel.breakpoint('small').active?0:50)});});});})(jQuery);