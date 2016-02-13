(function(){
	'use strict';

	angular
		.module('app'), ['ngRoute'])
		.config(Config);

	function Config($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'app/app.html',
				controller: 'AppController.js',
				controllerAs: 'vm'
			});
	}
})();