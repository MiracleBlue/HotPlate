define([

], function(

) {
	return angular.module("hotPlate.services", []).service("SuperService", function($rootScope) {
		var self = this;

		function loadTrackList(callback, tracks) {
			callback(tracks);
		};

		this.loadTrackList = function(callback) {
			console.log("loadTrackList");
			SC.get('/tracks', { genres: 'trance', duration: { from: (20*60)*1000 } }, function(tracks) {
				console.log(tracks);

				$rootScope.$apply(function() {
					callback(tracks);
				});
			});
		};

		this.loadTrack = function(id, callback) {
			console.log("$rootScope? ", $rootScope);
			console.log("loadTrack");
			SC.stream("/tracks/" + id, function(sound) {
				console.log("loadTrack sound:", sound);
				callback(sound);
			});
		};
	});
});