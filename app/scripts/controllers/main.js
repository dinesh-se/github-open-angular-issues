'use strict';

/**
 * @ngdoc function
 * @name githubIssuesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubIssuesApp
 */
angular.module('githubIssuesApp')
  .controller('MainCtrl', ['Repo', 'ApiService', 'IssueDataService', 'UtilService', '$location', function (Repo, ApiService, IssueDataService, UtilService, $location) {
    var vm = this;
    vm.links = {};

    function loadIssues(url, params) {
      if(!params) {
        params = '';
      }
      ApiService.fetchData(url, params).then(function(response) {
        vm.issuesList = response.data;
        vm.links = UtilService.getHeaderLinks(response.headers('Link'));
      });
    }

    ApiService.fetchData(Repo.ANGULARJS).then(function(response) {
      vm.repoName = response.data.name;
      loadIssues(response.data.issues_url, "?state=open&page=1&per_page=10");
    });

    vm.goToIssueDetails = function(issue) {
      if(issue.comments) {
        IssueDataService.setData(issue);
        $location.path('/issueDetails');
      }
    };

    vm.goToNextPage = function() {
      loadIssues(vm.links.next);
    };

    vm.goToPrevPage = function() {
      loadIssues(vm.links.prev);
    }

    vm.goToFirstPage = function() {
      loadIssues(vm.links.first);
    }

    vm.goToLastPage = function() {
      loadIssues(vm.links.last);
    }
  }]);
