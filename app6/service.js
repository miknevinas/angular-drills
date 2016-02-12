angular.module('apiApp').service('service', function($http, $q){
    
    this.getStarWars = function() {
        
    var deferred = $q.defer();
    $http ({
       method: 'GET',
       url: 'http://swapi.co/api/people/1/' 
    }).then(function(response){
        deferred.resolve(response);
    })
    return deferred.promise;  
    }
});
