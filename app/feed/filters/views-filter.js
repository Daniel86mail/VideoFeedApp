angular.module('feedFilters', [])
.filter('count', function () {
    return function (number) { //only take care of the most common magnitudes here (more can be added as needed)
        if(number >= Math.pow(10, 9))
            return (number / Math.pow(10, 9)).toFixed(1)+"B";
        if(number >= Math.pow(10, 6))
            return (number / Math.pow(10, 6)).toFixed(1)+"M";
        if(number >= Math.pow(10, 3))
            return (number / Math.pow(10, 3)).toFixed(1)+"K";
      return number;
    };
  });