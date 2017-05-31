	// create the module and name it bimodule
	var bimodule = angular.module('biModule', ['ngRoute']);

	// configure our routes
	bimodule.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/index.html',
				controller  : 'biDashboardmain'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/index.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/index.html',
				controller  : 'contactController'
			});
	});

	

	bimodule.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	bimodule.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});