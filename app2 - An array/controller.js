angular.module('arrayApp').controller('arrayController', function($scope, service){
    
    $scope.getAllData = function() {
        $scope.people = service.getData();
    }
    $scope.getAllData();
});