angular.module('boxApp').controller('controller', function($scope){
    
    $scope.names = [""];
    
    $scope.addButton = function() {
        $scope.names.push($scope.newName);
    }
});