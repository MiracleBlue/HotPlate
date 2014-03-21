define([
	"controllers/superCtrl"
], function(
	superCtrl
) {
	return angular.module("hotPlate.controllers", []).controller("MyCtrl", ["$scope", "$injector", function($scope, $injector) {
		require(["controllers/myCtrl"], function(myCtrl) {
			$injector.invoke(myCtrl, this, {"$scope": $scope});
		})
	}]).controller("SuperCtrl", superCtrl)
});