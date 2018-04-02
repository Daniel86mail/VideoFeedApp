angular.module('feedDirectives', [])
.directive('feedItem', function() {
  return {
    restrict: 'E',
    scope: {
      item: '='
    },
    templateUrl: 'feed/directives/feed-item.html',
    controller: function(){
    }
  };
});