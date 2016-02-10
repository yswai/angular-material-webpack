import angular from 'angular';

var app = angular.module('app');
app.controller('GridBottomSheetCtrl', GridBottomSheetCtrl);

GridBottomSheetCtrl.$inject = ['$mdBottomSheet'];

function GridBottomSheetCtrl($mdBottomSheet) {

    var vm = this;
    vm.listItemClick = listItemClick;
    vm.items = [
        { icon: 'chat_bubble_outline', name: 'Hangout'},
        { icon: 'email', name: 'Mail'},
        { icon: 'message', name: 'Message'},
        { icon: 'content_copy', name: 'Copy'},
        { icon: 'account_circle', name: 'Facebook'},
        { icon: 'flag', name: 'Twitter'}
    ];

    function listItemClick(item) {
        $mdBottomSheet.hide(item);
    };
}