var app = angular.module('reForcar', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})
		.when('/sobre', {
			templateUrl: 'templates/sobre.html',
			controller: 'sobreController'
		})
		.when('/cadastro', {
			templateUrl: 'templates/cadastro.html',
			controller: 'cadastroController'
		})
		.when('/cadastroInstituicao', {
			templateUrl: 'templates/cadastroInstituicao.html',
			controller: 'cadastroInstituicaoController'
		})
		.when('/cadastroVoluntario', {
			templateUrl: 'templates/cadastroVoluntario.html',
			controller: 'cadastroVoluntarioController'
		})
		.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'loginController'
		})
		.otherwise({
			redirectTo:'/home'
		});
});

