/* global OAuth */
'use strict';

angular.module('fitstartApp').factory('fitbitService', ['$q', function ($q) {
  var authorizationResult = false;
  return {
    initialize: function () {
      OAuth.initialize('4JyE38P_ZmsNXGR3vdmTKb7sdSM', {cache: true});
      authorizationResult = OAuth.create('fitbit');
    },
    isReady: function () {
      return (authorizationResult);
    },
    connectFitbit: function() {
      var deferred = $q.defer();
      OAuth.popup('fitbit', {cache: true}, function (error, result) {
        if(error) {
          deferred.reject(error);
        } else {
          authorizationResult = result;
          deferred.resolve();
        }
      });
      return deferred.promise;
    },
    clearCache: function() {
      OAuth.clearCache('fitbit');
      authorizationResult = false;
    },
    getMyData: function () {
      var deferred = $q.defer();
      var promise = authorizationResult.get('/1/user/-/profile.json', {
        headers: {
          'Accept-Language': 'en_US'
        }
      }).done(function (data) {
        deferred.resolve(data);
      }).fail(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },
    getRecentActivities: function () {
      var deferred = $q.defer();
      var promise = authorizationResult.get('/1/user/-/activities/recent.json', {
        headers: {
          'Accept-Language': 'en_US'
        }
      }).done(function (data) {
        deferred.resolve(data);
      }).fail(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },
    getBodyWeightHistory: function (date, period) {
      var today = new Date();
      date = date || today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
      period = period || '1m';
      var deferred = $q.defer();
      var promise = authorizationResult.get('/1/user/-/body/log/weight/date/'+date+'/'+period+'.json', {
        headers: {
          'Accept-Language': 'en_US'
        }
      }).done(function (data) {
        deferred.resolve(data);
      }).fail(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },
    getStepsHistory: function (date, period) {
      var today = new Date();
      date = date || today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
      period = period || '1m';
      var deferred = $q.defer();
      var promise = authorizationResult.get('/1/user/-/activities/steps/date/'+date+'/'+period+'.json', {
        headers: {
          'Accept-Language': 'en_US'
        }
      }).done(function (data) {
        deferred.resolve(data);
      }).fail(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    },
    getSleepHistory: function (date, period) {
      var today = new Date();
      date = date || today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
      period = period || '1m';
      var deferred = $q.defer();
      var promise = authorizationResult.get('/1/user/-/sleep/minutesAsleep/date/'+date+'/'+period+'.json', {
        headers: {
          'Accept-Language': 'en_US'
        }
      }).done(function (data) {
        deferred.resolve(data);
      }).fail(function (error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
}]);
