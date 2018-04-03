'use strict';

/**
 * @ngdoc directive
 * @name githubIssuesApp.directive:loading
 * @description
 * # loading
 */
angular.module('githubIssuesApp')
  .directive('loading', ['$http', function($http) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.isLoading = function () {
          return $http.pendingRequests.length > 0;
        };
        scope.$watch(scope.isLoading, function (value) {
          if (value) {
            element.removeClass('ng-hide');
          } else {
            element.addClass('ng-hide');
          }
        });
      }
    };
  }]);
