import angular from 'angular';
import GridBottomSheetCtrl from './material-angular/grid-bottom-sheet.controller.js';
import DialogController from './material-angular/dialog.controller.js';

var app = angular.module('app');
app.controller('MaterialAngularCtrl', MaterialAngularCtrl);

MaterialAngularCtrl.$inject = ['$mdToast', '$log', '$q', '$timeout', '$mdBottomSheet', '$mdDialog'];

function MaterialAngularCtrl($mdToast, $log, $q, $timeout, $mdBottomSheet, $mdDialog) {

    var vm = this;
    /* Toast */
    vm.showSimpleToast = showSimpleToast;

    /* Autocomplete */
    vm.repos = loadAll();
    vm.querySearch = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.searchTextChange = searchTextChange;

    /* Bottom Grid */
    vm.bottomGridItems = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy2' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' }
    ];
    vm.showGridBottomSheet = showGridBottomSheet;

    /* Dialog */
    vm.showTabDialog = showTabDialog;

    /* Chips */
    vm.roFruitNames = ['Apple', 'Mango', 'Orange'];
    vm.isChipsReadonly = false;

    /* Fab toolbar */
    vm.fabSelectedMode = 'md-fling';
    vm.isFabOpen = true;

    function showSimpleToast() {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Simple Toast!')
                .position('bottom left')
                .hideDelay(3000)
        );
    }

    function querySearch(query) {
        var results = query ? vm.repos.filter( createFilterFor(query) ) : vm.repos;
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(results);
        }, 1000);
        return deferred.promise;
    }
    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
        var repos = [
            {
                'name'      : 'Angular 1',
                'url'       : 'https://github.com/angular/angular.js',
                'watchers'  : '3,623',
                'forks'     : '16,175',
            },
            {
                'name'      : 'Angular 2',
                'url'       : 'https://github.com/angular/angular',
                'watchers'  : '469',
                'forks'     : '760',
            },
            {
                'name'      : 'Angular Material',
                'url'       : 'https://github.com/angular/material',
                'watchers'  : '727',
                'forks'     : '1,241',
            },
            {
                'name'      : 'Bower Material',
                'url'       : 'https://github.com/angular/bower-material',
                'watchers'  : '42',
                'forks'     : '84',
            },
            {
                'name'      : 'Material Start',
                'url'       : 'https://github.com/angular/material-start',
                'watchers'  : '81',
                'forks'     : '303',
            }
        ];
        return repos.map( function (repo) {
            repo.value = repo.name.toLowerCase();
            return repo;
        });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
            return (item.value.indexOf(lowercaseQuery) === 0);
        };
    }

    function showGridBottomSheet() {
        vm.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.tpl',
            controller: 'GridBottomSheetCtrl',
            controllerAs: 'vm',
            clickOutsideToClose: false
        }).then(function(clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
            );
        });
    }

    function showTabDialog(ev) {
        $mdDialog.show({
            controller: 'DialogController',
            controllerAs: 'vm',
            templateUrl: 'tabDialog.tpl',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        }).then(function(answer) {
            $log.info('You said the information was "' + answer + '".');
        }, function() {
            $log.info('You cancelled the dialog.');
        });
    }

}