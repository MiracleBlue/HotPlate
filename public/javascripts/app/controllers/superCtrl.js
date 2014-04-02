define(function() {
	return ["$scope", "$http", function($scope, $http) {
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
		$scope.loadTrack = function(fileName) {
			$scope.currentFile = fileName;
			SC.stream("/tracks/" + $scope.currentFile, function(sound) {
				console.log("loadTrack", sound);
				$scope.currentSound = sound;
				if ($scope.playing) {
					$scope.play();
				}
			});
		};

		SC.get('/tracks', { genres: 'trance', duration: { from: (20*60)*1000 } }, function(tracks) {
			console.log(tracks);
			$scope.$apply(function(scope) {
				scope.fileList = tracks;
			});
			console.log("fileList", $scope.fileList);
			console.log("scope", $scope);
		});
	}]
})