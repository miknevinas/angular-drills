angular.module('filterApp').controller('controller', function($scope, service){
    
    $scope.getAllData = function() {
        $scope.people = service.getData();
    }
    $scope.getAllData();
    
});