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