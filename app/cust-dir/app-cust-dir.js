(function () {
	var cdM = angular.module('ali.cust.dir');

	cdM.directive('angubsLightbox', [function(){
		return {
			scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, Lightbox) {
				// This requires two kinds of images. 1. the real image displayed in lightbox 2. thumbUrl image.
				// Actually , you also can style the size in img tag.
				$scope.images = [
				{
					'url': './metamorphosis/_img/science0.jpg',
					'caption': 'Optional caption',
				    'thumbUrl': './metamorphosis/_img/science0.jpg' // used only for this example
				},
				{
				  	'url': './metamorphosis/_img/science1.jpg',
				  	'thumbUrl': './metamorphosis/_img/science1.jpg'
				},
				{
				  	'url': './metamorphosis/_img/science2.jpg',
				  	'thumbUrl': './metamorphosis/_img/science2.jpg'
			  	}];

			  	$scope.openLightboxModal = function (index) {
			  		Lightbox.openModal($scope.images, index);
			  	};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './partials/angubs-lightbox.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

})();