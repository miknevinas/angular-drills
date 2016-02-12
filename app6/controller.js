angular.module('apiApp').controller('controller', function($scope, service){
    
    
    $scope.showStarWars = function() {
        service.getStarWars().then(function(response) {
            $scope.people = response;
            console.log(response);
        })
    }
    $scope.showStarWars();
    
});