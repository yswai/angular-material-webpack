import angular from 'angular';

var app = angular.module('app');
app.controller('MaterialAngularCtrl', MaterialAngularCtrl);

MaterialAngularCtrl.$inject = ['$mdToast', '$log', '$q', '$timeout'];

function MaterialAngularCtrl($mdToast, $log, $q, $timeout) {

    var vm = this;
    vm.showSimpleToast = showSimpleToast;
    vm.repos = loadAll();
    vm.querySearch = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.searchTextChange = searchTextChange;

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

}