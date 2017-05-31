bimodule.factory('biModuleSignService', function($http){
    return {
        getdata: function() {
            return $http.get('http://sportslearnertesting.herokuapp.com/config/get-status');
        }
    };
});