'use strict';

/**
 * @ngdoc service
 * @name githubIssuesApp.Repo
 * @description
 * # Repo
 * Constant in the githubIssuesApp.
 */
angular.module('githubIssuesApp')
  /**
  * Repo url are given as constants and so multiple repos can be added
  * just by adding the repo url here and edit constant name in MainCtrl
  */
  .constant('Repo', {
    ANGULARJS : 'https://api.github.com/repos/angular/angular.js'
  });
