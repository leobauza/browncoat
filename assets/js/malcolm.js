/* 
 * =============================================================
 * v.awesome
 * =============================================================
 */

SITE = {
	//global
	common : {
		init			: function(){
			console.log('common init!')
			function loadImg() {
				var r = $.Deferred();
				$('body').imagesLoaded( function() {
					console.log('my images are loaded from common.init');
					r.resolve();
				});
				return r;
			} 

			var callDone = function() {
				SITE.common.initDone();
			}

			loadImg().done(callDone);

		},
		initDone	: function() {
			$('.span6 img').animate({
				opacity: .5,
			}, 2000, function() {
				console.log('fade in has happend on initDone');
			});
		},

		finalize	: function(){
			console.log('finalize common, oh and here are my global vars:');
			console.log($vars);
		}
	},
	//interior pages
	interior : {
		init			: function(){
			console.log('interior init!');
		},
		about			: function(){
			console.log('about ID in the house!');
			$(document).bind('finalized',function(){
				console.log('my low priority code (non queue)');
			});
		},
		contact	: function(){
			console.log('contact ID in the house!');
		}
	}
}



UTIL = {

	fire : function(func,funcname, args){

		var namespace = SITE;// indicate your obj literal namespace here

		funcname = (funcname === undefined) ? 'init' : funcname;
		if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
			namespace[func][funcname](args);
		}

	},

	loadEvents : function(){

		var bodyId = document.body.id;

		// hit up common first.
		UTIL.fire('common');

		// do all the classes too.
		$.each(document.body.className.split(/\s+/),function(i,classnm){
			UTIL.fire(classnm);
			UTIL.fire(classnm,bodyId);
		});

		UTIL.fire('common','finalize');
		$(document).trigger('finalized');
	}

};


// kick it all off here (doc ready) 
$(function(){
	//GLOBAL vars
	$vars = initial();
	UTIL.loadEvents();
});