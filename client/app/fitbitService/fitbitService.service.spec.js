'use strict';

describe('Service: fitbitService', function () {

  // load the service's module
  beforeEach(module('fitstartApp'));

  // instantiate service
  var fitbitService;
  beforeEach(inject(function (_fitbitService_) {
    fitbitService = _fitbitService_;
  }));

  it('should do something', function () {
    expect(!!fitbitService).toBe(true);
  });

});
