define(function() {
	return ["$scope", "$http", "SuperService", function($scope, $http, superService) {
		$scope.model = {
			playing: false,
			fileList: [],
			currentFile: "nothing",
			currentSound: null
		};
		$scope.thing = "Boom, works";
		$scope.playing = false;

		$scope.fileList = [];

		$scope.currentFile = "dont-mind-waiting.mp3";
		$scope.currentSound = null;
		// Methods should all return $scope;
		$scope.play = function() {
			console.log("play");
			$scope.currentSound.play();
			$scope.playing = true;
			return $scope;
		};
		$scope.pause = function() {
			console.log("pause");
			$scope.currentSound.pause();
			$scope.playing = false;
			return $scope;
		};
		$scope.loadTrack = function(id) {
			console.log("loadTrack();");
			$scope.currentFile = id;
			superService.loadTrack($scope.currentFile, function(sound) {
				console.log("loadTrack sound:", sound);
				$scope.currentSound = sound;
				if ($scope.playing) {
					$scope.play();
				}
			});
			return $scope;
		};

		superService.loadTrackList(function(tracks) {
			$scope.fileList = tracks;
		});
	}]
});