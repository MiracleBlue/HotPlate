require.config({
	baseUrl: "javascripts/app",
	paths: {
		text: "../bower_components/requirejs-text/text"
	}
});

require([
	"app",
	"routes"
], function(
	app,
	routes
) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		$html.addClass('ng-app');
		angular.bootstrap($html, [app['name']]);
	});

	// Just some soundcloud stuff
	SC.initialize({
		client_id: "50adf62a807832b54c4558ed5b2239ea"
	});



});