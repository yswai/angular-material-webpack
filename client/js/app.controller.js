import angular from 'angular';

var app = angular.module('app');
app.controller('MaterialAngularCtrl', MaterialAngularCtrl);

MaterialAngularCtrl.$inject = ['$mdToast'];

function MaterialAngularCtrl($mdToast) {
    var vm = this;
    vm.showSimpleToast = showSimpleToast;

    function showSimpleToast() {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Simple Toast!')
                .position('top right')
                .hideDelay(3000)
        );
    }
}