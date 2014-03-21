define(['app'], function(app) {

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'javascripts/app/templates/template1.html',
			controller: 'SuperCtrl'
		});
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);

});