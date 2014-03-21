define(function() {
	return ["$scope", "$http", function($scope, $http) {
		$scope.thing = "Boom, works";
		$scope.playing = false;
		$scope.fileList = [];
		$scope.path = "music/";
		$scope.currentFile = "dont-mind-waiting.mp3";
		$scope.computedFilePath = function() {return $scope.path + $scope.currentFile;};
		$http({method: "GET", url: "/api/music.json"}).success(function(data) {
			console.log(data);
			$scope.fileList = data;
		});
	}]
})