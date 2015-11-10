(function () {

	var angu = ['ui.bootstrap', 'ngSanitize', 'ngAria', 'ngAnimate', 'mgcrea.ngStrap', 'bootstrapLightbox', 'angularMoment'];
	var routerCtrl = ['ali.router', 'ali.ctrl'];
	var cons = ['ali.constant'];
	var serv = ['ali.sig.service', 'ali.service'];
	var dir = ['ali.dir', 'ali.cust.dir', 'ali.dir.modal'];

	var depedencyArr = angu.concat(routerCtrl, cons, serv, dir);
	/**
	* ali Module
	*
	* The main module of this application...
	*/
	angular.module('ali', depedencyArr);

	angular.module('ali.router', ['ui.router']);
	angular.module('ali.constant', []);
	angular.module('ali.sig.service', []);
	angular.module('ali.service', []);
	angular.module('ali.ctrl', []);
	angular.module('ali.dir', ['ali.service', 'ali.sig.service']);
	angular.module('ali.cust.dir', ['ali.service', 'ali.sig.service']);
	angular.module('ali.dir.modal', ['ali.service', 'ali.sig.service']);

})();
(function () {
	var rM = angular.module('ali.router');

	// rM

})();
(function () {
	var cosM = angular.module('ali.constant');

})();
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
(function () {
	var dM = angular.module('ali.dir');

	// dM

})();
(function () {
	var shM = angular.module('ali.dir.modal');

	shM.directive('sayhelloModal', ['$uibModal', function($uibModal){
		return {
			scope: {
				'modalTitle': '@',
				'modalText': '@',
				'callbackfunction': '&'
			}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, ctrl) {
				iElm.bind('click', function() {
					var modalObj = {
						scope: $scope,
						templateUrl: './partials/sayhello-modal.html',
						size: 'md'
					};

					$scope.modalInstance = $uibModal.open(modalObj);
					$scope.titleHere = $scope.modalTitle;
					$scope.contentHere = $scope.modalText;

					$scope.modalInstance.result.then($scope.callbackfunction);

				});

				$scope.save = function () {
					sayHi ();
					$scope.modalInstance.close();
				};

				$scope.close = function () {
					$scope.modalInstance.dismiss('cancel');
				};

				function sayHi () {
					alert('Hello World...');
					console.log('Hello World, this is modal...');
				}
			}
		};
	}]);

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('ali.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('ali.sig.service');

	// ssM

})();
(function () {
	var ctrlM = angular.module('ali.ctrl');

	ctrlM.controller('EntireCtrl', ['$scope', function($scope){
		$scope.titleModal = "Haha...May Day May Day...";
		$scope.textModal = "Ermmm...Modal-text...";
		$scope.sayHelloCurrentLevel = function (titleModalHere) {
			alert("current level callback function ---- what is modal title--> "+titleModalHere);
			console.log("current level callback function ---- what is modal title: --> "+titleModalHere);
		};
	}]);

})();
// jQuery Js Document
$(document).ready(function() {
});