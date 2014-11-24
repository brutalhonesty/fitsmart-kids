'use strict';

angular.module('fitstartApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/recent-activities', {
        templateUrl: 'app/recentActivities/recentActivities.html',
        controller: 'RecentactivitiesCtrl'
      });
  });
