angular.module('App')
.controller("WeightGraphController", function($scope) {
    $scope.labels = ["January", "Febuary", "March", "April", "May", "June"];
    $scope.series = ['Weight', 'BMI'];
    var bmis = [];
    var weights = [65, 70, 73.2, 73.4, 72.5, 76.7];
    var sum = 0;
    for(var i = 0; i < weights.length; i++) {
        sum = sum + weights[i];
    }
    $scope.avgWeight = sum/weights.length;
    angular.forEach(weights, function(weight) {
        var bmi;
        bmi = weight/(1.75*1.75);
        bmis.push(bmi.toFixed(1));
    });
    $scope.data = [weights, bmis];
    $scope.colors = ['#e20645', '#e09202'];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1'}, { yAxisID: 'y-axis-2'}];
    $scope.chartOptions = {
        title: {
            display: true,
            text: 'Weight and BMI Chart',
            fontSize: 18
        },
        legend: {
            display: true,
            position: 'bottom'
        },
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
    $scope.showSuggestion = false;
    $scope.toggleShowSuggestion = function() {
        $scope.showSuggestion = !$scope.showSuggestion;
    }
});