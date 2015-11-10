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