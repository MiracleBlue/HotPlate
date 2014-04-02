define([

], function(

) {
	return angular.module("hotPlate.directives", []).directive("musical", function() {
		return {
			restrict: "EA",
			template: '<div>{{currentFile}}</div><audio src="{{computedFilePath()}}"></audio><button ng-click="play()">Play</button><button ng-click="pause()">Pause</button>',
			link: function($scope, element, attrs) {
				var audioElem = element.find("audio")[0];
				console.log($scope, element, attrs);
				console.log(this);
				/*$scope.play = function() {
					audioElem.play();
					$scope.playing = true;
				};
				$scope.pause = function() {
					audioElem.pause();
					$scope.playing = false;
				};*/

			}
		}
	}).directive("playlist", function() {
		return {
			restrict: "EA",
			templateUrl: "javascripts/app/templates/playlistTemplate.html",
			link: function($scope, element, attrs) {

			}
		}
	})
});