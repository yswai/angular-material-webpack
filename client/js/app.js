import angular from 'angular';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-route';

var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'angular-material.tpl',
        controller: 'MaterialAngularCtrl',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise('/');
}]);