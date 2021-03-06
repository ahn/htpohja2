/* globals angular */
'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl',
        resolve: {
          loggedInUser: /*@ngInject*/ function(authService) {
            return authService.getUserFromServerIfNeeded();
          }
        }
      });
  });