'use strict';

/**
 * @ngdoc function
 * @name githubIssuesApp.controller:IssueDetailsCtrl
 * @description
 * # IssueDetailsCtrl
 * Controller of the githubIssuesApp
 */
angular.module('githubIssuesApp')
  .controller('IssueDetailsCtrl', ['IssueDataService', 'ApiService', '$location', function (IssueDataService, ApiService, $location) {
    var vm = this;
    var issue = IssueDataService.getData();
    vm.title = issue.title;
    ApiService.fetchData(issue.comments_url).then(function(response) {
      vm.comments = response.data;
    });
  }]);
