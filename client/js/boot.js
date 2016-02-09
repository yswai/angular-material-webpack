import angular from 'angular';
require('./app.js');
require('./app.controller.js');
require('angular-material');

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});