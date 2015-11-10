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