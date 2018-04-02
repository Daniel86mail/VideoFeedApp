
angular.module('myApp.feed', ['ngRoute','feedServices', 'feedDirectives', 'feedFilters'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feed', {
    templateUrl: 'feed/feed.html',
    controller: 'feedCtrl'
  });
}])

.controller('feedCtrl', ['$scope', 'feedSvc', function($scope, feedSvc) {
  $scope.isLoading = true;
  $scope.items = null;

  feedSvc.getItems().then(function(items){
    $scope.items = items;
    $scope.isLoading = false;
  });
}]);