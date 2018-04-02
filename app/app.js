'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.feed'
])
.config(['$locationProvider', '$routeProvider', '$sceDelegateProvider' , function($locationProvider, $routeProvider, $sceDelegateProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/feed'});
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://www.youtube.com/**', 'http://www.facebook.com/**']);  //this is done to bypass angularJS security limitation of loading data from other domains. 
}]);
