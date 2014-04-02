define([

], function(

) {
	return angular.module("hotPlate.services", []).service("SuperService", function($rootScope) {
		var self = this;

		this.loadTrackList = function(callback) {
			SC.get('/tracks', { genres: 'trance', duration: { from: (20*60)*1000 } }, function(tracks) {
				console.log(tracks);
				$rootScope.$apply(function() {
					callback(tracks);
				});
			});
		};

		this.loadTrack = function(id, callback) {
			SC.stream("/tracks/" + id, function(sound) {
				console.log("loadTrack", sound);
				$rootScope.$apply(function() {
					callback(sound);
				});
			});
		};
	});
});