/* global OAuth */
'use strict';

angular.module('fitstartApp').controller('MainCtrl', ['$scope', 'fitbitService', function ($scope, fitbitService) {
  fitbitService.initialize();
  if(fitbitService.isReady()) {
    fitbitService.getMyData().then(function (data) {
      $scope.user = data.user;
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
  }
  $scope.connect = function() {
    fitbitService.connectFitbit().then(function (data) {
      if(fitbitService.isReady()) {
        fitbitService.getMyData().then(function (data) {
          $scope.user = data.user;
        }, function (error) {
          fitbitService.clearCache();
          $scope.error = error;
        });
      }
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
  };
}]);
