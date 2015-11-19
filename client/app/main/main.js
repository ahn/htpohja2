/* globals angular  */
'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          loggedInUser: /*@ngInject*/ function(authService) {
            return authService.getUserFromServerIfNeeded();
          }
        }
      });
  });