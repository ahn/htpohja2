/* globals angular */
'use strict';

angular.module('workspaceApp')
  .controller('RegisterCtrl', function ($scope, $http, $location) {
    $scope.register = function() {
      var data = {
        realname: $scope.realname,
        username: $scope.username,
        password: $scope.password
      };
      $http({
        method: 'POST',
        url: '/api/users/',
        data: data
      }).then(function() {
        $location.path('/login');
      },
      function() {
        
      });
    };
  });
