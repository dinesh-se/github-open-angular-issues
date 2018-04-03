'use strict';

describe('Service: fetchService', function () {

  // load the service's module
  beforeEach(module('githubIssuesApp'));

  // instantiate service
  var fetchService;
  beforeEach(inject(function (_fetchService_) {
    fetchService = _fetchService_;
  }));

  it('should do something', function () {
    expect(!!fetchService).toBe(true);
  });

});
