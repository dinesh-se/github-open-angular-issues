'use strict';

describe('Service: UrlService', function () {

  // load the service's module
  beforeEach(module('githubIssuesApp'));

  // instantiate service
  var UrlService;
  beforeEach(inject(function (_UrlService_) {
    UrlService = _UrlService_;
  }));

  it('should do something', function () {
    expect(!!UrlService).toBe(true);
  });

});
