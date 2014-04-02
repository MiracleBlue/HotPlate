define([
	"controllers",
	"directives",
	"services"
], function(
	controllers,
	directives,
	services
) {
	return angular.module("hotPlate", [
		"ui.router",
		"ngRoute",
		"hotPlate.controllers",
		"hotPlate.directives",
		"hotPlate.services"
	]);
});