angular.module('App')
.controller('HealthRecordController', function($scope) {
    $scope.showSymbolDesc = false;
    $scope.toggleShowSymbolDesc = function() {
        $scope.showSymbolDesc = !$scope.showSymbolDesc;
    }
});