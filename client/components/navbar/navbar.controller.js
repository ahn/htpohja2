/* globals angular */

'use strict';

angular.module('workspaceApp')
  .controller('NavbarCtrl', function ($scope, $location, authService) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    
    $scope.logout = function() {
      authService.logout().then(function() {
        $scope.loggedInUser = null;
      });
    };
  });