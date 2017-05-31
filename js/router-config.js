
	// configure our routes
	bimodule.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/index.html',
				controller  : 'biDashboardmain'
			})

	});
	