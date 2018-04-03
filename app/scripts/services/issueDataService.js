'use strict';

/**
 * @ngdoc service
 * @name githubIssuesApp.IssueDataService
 * @description
 * # IssueDataService
 * Service in the githubIssuesApp.
 */
angular.module('githubIssuesApp')
  .service('IssueDataService', function () {
    var data = "";

    this.getData = function() {
      return data;
    }

    this.setData = function(issueData) {
      data = issueData;
    }
  });
