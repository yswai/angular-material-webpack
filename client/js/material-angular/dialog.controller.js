import angular from 'angular';

var app = angular.module('app');
app.controller('DialogController', DialogController);

DialogController.$inject = ['$mdDialog', '$log'];

function DialogController($mdDialog, $log) {

    var vm = this;
    vm.answer = answer;
    vm.cancel = $mdDialog.cancel;

    function answer(answer) {
        $mdDialog.confirm(answer);
        $mdDialog.hide();
    }

}