'use strict';

angular.module('fitstartApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Recent Activites',
      'link': '/recent-activities'
    }, {
      'title': 'History',
      'link': '/history'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });