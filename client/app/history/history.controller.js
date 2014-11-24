'use strict';

angular.module('fitstartApp').controller('HistoryCtrl', ['$scope', 'fitbitService', function ($scope, fitbitService) {
  fitbitService.initialize();
  if(fitbitService.isReady()) {
    fitbitService.getBodyWeightHistory().then(function (weightData) {
      $scope.weightHistory = weightData['weight'];
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
    fitbitService.getStepsHistory().then(function (stepData) {
      $scope.stepHistory = stepData['activities-steps'];
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
    fitbitService.getSleepHistory().then(function (sleepData) {
      $scope.sleepHistory = sleepData['sleep-minutesAsleep'];
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
  }
}]);
