'use strict';

/**
 * @ngdoc overview
 * @name githubIssuesApp
 * @description
 * # githubIssuesApp
 *
 * Main module of the application.
 */
angular
  .module('githubIssuesApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/issueDetails', {
        templateUrl: 'views/issue-details.html',
        controller: 'IssueDetailsCtrl',
        controllerAs: 'issueDetails'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true).hashPrefix('');
  });
