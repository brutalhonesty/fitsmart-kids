'use strict';

angular.module('fitstartApp').controller('RecentactivitiesCtrl', ['$scope', 'fitbitService', function ($scope, fitbitService) {
  fitbitService.initialize();
  if(fitbitService.isReady()) {
    fitbitService.getRecentActivities().then(function (data) {
      $scope.activities = data;
    }, function (error) {
      fitbitService.clearCache();
      $scope.error = error;
    });
  }
}]);
