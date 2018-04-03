'use strict';

describe('Service: Repo', function () {

  // load the service's module
  beforeEach(module('githubIssuesApp'));

  // instantiate service
  var Repo;
  beforeEach(inject(function (_Repo_) {
    Repo = _Repo_;
  }));

  it('should do something', function () {
    expect(!!Repo).toBe(true);
  });

});
