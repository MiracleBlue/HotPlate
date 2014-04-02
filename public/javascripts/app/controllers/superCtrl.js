define(function() {
	return ["$scope", "$http", "SuperService", function($scope, $http, $superService) {
		$scope.thing = "Boom, works";
		$scope.playing = false;
		$scope.fileList = [];
		$scope.path = "music/";
		$scope.currentFile = "dont-mind-waiting.mp3";
		$scope.currentSound = null;
		$scope.computedFilePath = function() {return $scope.path + $scope.currentFile;};
		$scope.play = function() {
			$scope.currentSound.play();
			$scope.playing = true;
		};
		$scope.pause = function() {
			$scope.currentSound.pause();
			$scope.playing = false;
		};
		$scope.loadTrack = function(id) {
			$scope.currentFile = id;
			$superService.loadTrack($scope.currentFile, function(sound) {
				console.log("loadTrack", sound);
				$scope.currentSound = sound;
				if ($scope.playing) {
					$scope.play();
				}
			});
		};

		$superService.loadTrackList(function(tracks) {
			$scope.fileList = tracks;
		});
	}]
});