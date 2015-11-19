/* globals angular */
'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        resolve: {
          loggedInUser: /*@ngInject*/ function(authService) {
            return authService.getUserFromServerIfNeeded();
          }
        }
      });
  });