
angular.module('feedServices', []) 
.factory('feedSvc', ['$http', function($http) {
    var dataUrl = 'https://cdn.playbuzz.com/content/feed/items'; 
    //'https://cdn.playbuzz.com/content/feed/items';
    //'http://localhost:8000/assets/data.json'
    function decorateFeedItems(response){ //checks the incoming data for missing pieces according to the question spec
        var items = response.data.items;
        _.each(items, function(item){
            if(!item.title)
                item.title = 'Title is missing.';
            if(!item.views)
                item.views = 'View count is missing';
            if(item.source){
                if(!item.videoId && !item.url){
                    item.videoLink = null;
                }
                else{
                    item.videoLink = createVideoLink(item.source, item.videoId, item.url);
                }
            }
        });
        return items //cache this when adding filtering by source
    }

    function createVideoLink(source, videoId, url){ //create video link for supported sources
        switch(source) {
            case 'youtube':
                return 'https://www.youtube.com/embed/'+videoId;
                break;
            case 'facebook':
                return 'http://www.facebook.com/video/embed?video_id='+videoId+'/';
                break;
            case 'url':
                return url;
                breakl
            default: //source not supported
                return null; 
                break;
        }
    }

    var service = { 
        getItems: function() {      
            return $http.get(dataUrl).then(
                function(response){
                    return decorateFeedItems(response);
                },
                function(error) {
                    console.log(error.status); 
                    return [];
            }); 
        }
    };
    return service;
}]);
