'use strict';

angular.module('fitstartApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/history', {
        templateUrl: 'app/history/history.html',
        controller: 'HistoryCtrl'
      });
  });
