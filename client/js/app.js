import angular from 'angular';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-route';

var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', '$mdIconProvider', function($routeProvider, $mdIconProvider) {
    $mdIconProvider.fontSet('fa', 'fontawesome');
    $routeProvider.when('/', {
        templateUrl: 'angular-material.tpl',
        controller: 'MaterialAngularCtrl',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise('/');
}]);
