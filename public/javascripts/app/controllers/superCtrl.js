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
			$scope.model.currentSound.play();
			$scope.model.playing = true;
			return $scope;
		};
		$scope.pause = function() {
			console.log("pause");
			$scope.model.currentSound.pause();
			$scope.model.playing = false;
			return $scope;
		};
		$scope.loadTrack = function(id) {
			console.log("loadTrack();");
			$scope.model.currentFile = id;
			superService.loadTrack($scope.model.currentFile, function(sound) {
				console.log("callback sound:", sound);
				$scope.model.currentSound = sound;
				if ($scope.model.playing) {
					$scope.play();
				}
			});
			return $scope;
		};

		superService.loadTrackList(function(tracks) {
			$scope.model.fileList = tracks;
		});
	}]
});