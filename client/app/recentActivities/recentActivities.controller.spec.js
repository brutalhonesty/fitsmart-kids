'use strict';

describe('Controller: RecentactivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('fitstartApp'));

  var RecentactivitiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecentactivitiesCtrl = $controller('RecentactivitiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
