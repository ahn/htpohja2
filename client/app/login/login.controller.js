/* globals angular */
'use strict';

angular.module('workspaceApp')
  .controller('LoginCtrl', function ($scope, $location, authService, loggedInUser) {
    $scope.loggedInUser = loggedInUser;
    $scope.login = function() {
      authService.login($scope.username, $scope.password).then(function() {
        $location.path('/');
      },
      function() {
        // TODO
      });
    };
  });
