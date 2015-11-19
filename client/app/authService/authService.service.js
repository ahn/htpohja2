/* globals angular */
'use strict';



angular.module('workspaceApp').factory('authService',
  ['$http', '$q', function($http, $q) {
    var loggedInUser;
    function login(username, password) {
      return $http({
        method: 'POST',
        url: '/auth/login',
        data: {username: username, password: password}
      }).then(function(response) {
        loggedInUser = response.data.user;
        return loggedInUser;
      });
    }
    
    function getUserFromServerIfNeeded() {
      
      if (loggedInUser === undefined) {
        return $http({
          method: 'GET',
          url: '/auth/user'
        }).then(function(response) {
          console.log(response);
          loggedInUser = response.data.user;
          return loggedInUser;
        }, function() {
          loggedInUser = null;
          return loggedInUser;
        });
      }
      else  {
        var deferred = $q.defer();
        deferred.resolve(loggedInUser);
        return deferred.promise;
      }
    }
    
    function logout() {
      return $http({
        method: 'POST',
        url: '/auth/logout'
      }).then(function() {
        loggedInUser = null;
      });
    }
    
    return {
      logout: logout,
      login: login,
      getUserFromServerIfNeeded: getUserFromServerIfNeeded,
      getUser: function() { return loggedInUser; }
    };
    
  }]);