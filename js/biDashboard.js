// create the controller and inject Angular's $scope
	bimodule.controller('biDashboardmain', function($scope,$window,$cookieStore,biModuleSignService) {
		// create a message to display in our view
		 $scope.message='';
		 //$cookieStore.put('name','clerk');
		 //$cookieStore.remove(name);
		    var handleSuccess = function(data, status) {
		       if(data.status==true)
		       {
		       		if($cookieStore.put('name','clerk'))
		       		{
		       			$window.location.href = 'https://moodys.com';
		       		}
		       		else
		       		{
		       			//$cookieStore.put('name','clerk');
		       			$scope.message="you do not have access to this feature";
		       		}
		       		
		       }
		       else
		       {
		       //	$cookieStore.remove(name);
		       	$scope.message="you do not have access to this feature";
		       }
		    };

		biModuleSignService.getdata().success(handleSuccess);;
	});
