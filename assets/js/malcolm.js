/* 
 * =============================================================
 * v.awesome
 * =============================================================
 */

$(function(){

	// this should fix the console problem in IE 
	if (typeof console == "undefined") {
		this.console = {log: function() {}};
	}


/* 
 * =============================================================
 * IE TARGETTING
 * =============================================================
 */

// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
	function getInternetExplorerVersion() {
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re	= new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) {
				rv = parseFloat( RegExp.$1 );
			}
		}
		return rv;
	}
	//Sample Check Version Function
	function checkVersion() {
		var msg = "You're not using Internet Explorer.";
		var ver = getInternetExplorerVersion();
		if ( ver > -1 ) {
			if ( ver >= 8.0 ) {
				msg = "You're using a recent copy of Internet Explorer."
			}
			else {
				msg = "You should upgrade your copy of Internet Explorer.";
			}
		}
		console.log( msg );
	}

	//checkVersion();

	$('[class*=row-fluid]').each(function(){
		$(this).find("[class*=\"span\"]:last-child").addClass('l');
	});
	

/* 
 * =============================================================
 * Some Vars
 * =============================================================
 */

	//Window Width
	$winWidth = $(window).width();
	//iPad Check
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	var ieVer = getInternetExplorerVersion();


/* 
 * =============================================================
 * BTN PULL DOWN
 * =============================================================
 */

	$('.btn-set-dropdown .drop').click(function(e){
		var $this = $(this);
		$this.closest('.btn-set-dropdown').find('ul').toggle();
		e.preventDefault();
	});
	
/* 
 * =============================================================
 * iDevices touch wipe
 * =============================================================
 */
	
	var ieVer = getInternetExplorerVersion();
	if(ieVer == -1) {
		// iDevice
		$("body").touchwipe({
			wipeLeft: function(e) {
				console.log("wipe left");
				e.preventDefault();
			},
			wipeRight: function(e) {
				console.log("wipe right");
				e.preventDefault();
			},
			wipeUp: function() {
				
			},
			wipeDown: function() {
	
			}
	
		});
	}
	
/* 
 * =============================================================
 * LOADING (only images)
 * =============================================================
 */

	$('body').jpreLoader({
		showSplash: false
		//,autoClose: false
		,loaderVPos: '50%'
	});
	
	//should also account for background images
	
	//find backgrounds
	var backgroundImages = [];
	$("body").find('*:not(script)').each(function() {
		if($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
			backgroundImages.push($(this).css('background-image'));
		}
	});
	
	if(!$('img').length && backgroundImages.length == 0) {
		$(jOverlay).remove();
	}
	
/* 
 * =============================================================
 * MAIN NAV DROPDOWN
 * =============================================================
 */




}); //end ready function









