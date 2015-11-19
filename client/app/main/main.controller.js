/* globals angular */
'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $http, loggedInUser) {
    $scope.loggedInUser = loggedInUser;
    $scope.awesomeThings = [];

    $http.get('/api/users').then(function(response) {
      $scope.users = response.data;
    });

  });
