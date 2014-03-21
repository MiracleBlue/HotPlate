define([
	"controllers",
	"directives"
], function(
	controllers,
	directives
) {
	return angular.module("hotPlate", [
		"ui.router",
		"ngRoute",
		"hotPlate.controllers",
		"hotPlate.directives"
	]);
});