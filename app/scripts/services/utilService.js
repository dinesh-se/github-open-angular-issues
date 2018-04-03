'use strict';

/**
 * @ngdoc service
 * @name githubIssuesApp.utilService
 * @description
 * # utilService for managing common utility methods
 * Service in the githubIssuesApp.
 */
angular.module('githubIssuesApp')
  .service('UtilService', function () {
    //method to split urls with next and last property
    this.getHeaderLinks = function(header) {

        var parts = header.split(',');
        var links = {};

        angular.forEach(parts, function (p) {
            var section = p.split(';');
            if (section.length != 2) {
                console.error("section could not be split on ';'");
            }
            var url = section[0].replace(/<(.*)>/, '$1');
            var urlParts = url.split(';');
            links[section[1].match(/"(.*)"/)[1]] = url;
        });
        return links;
    }
  });
