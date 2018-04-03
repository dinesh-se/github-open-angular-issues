'use strict';

/**
 * @ngdoc service
 * @name githubIssuesApp.ApiService
 * @description
 * # fetch
 * Factory in the githubIssuesApp.
 */
angular.module('githubIssuesApp')
  .factory('ApiService', ['$http', function ($http) {

    function fetchData(url, param) {
      if(param) {
        url = url.replace(/\{([^}]+)\}/g, param);
      }
      return $http.get(url);
    }

    // Public API here
    return {
      fetchData: fetchData
    };
  }]);
