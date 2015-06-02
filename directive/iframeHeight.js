angular.module('fiskkitTestProject').directive('iframeHeight', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, fn) {
			var ifr = element[0];
			element.on('load', function(){
               var iFrameHeight = ( parent.window.innerHeight|parent.document.body.clientHeight) + 'px';
               ifr.style.height = iFrameHeight;
			   //console.log( element.src );
			});
		}
	};
});