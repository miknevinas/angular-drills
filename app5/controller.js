angular.module('extendApp').controller('controller', function($scope, service){
    
   $scope.showData = function() {
       service.getData().then(function(response){
           $scope.people = response;
           console.log(response);
       })
   }
    $scope.showData();
});