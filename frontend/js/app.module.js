angular.module("app", [])
    .controller('sampleController', ['$scope', '$http', function ($scope, $http) {
        $scope.name = "";
        $scope.response = "Name not sent to the server";

        $scope.onSubmit = function () {
            $scope.data = {
                name: $scope.name
            }
            $http({
                method: 'POST',
                url: 'http://54.183.210.82:3001/submitForm',
                data: $scope.data,
                headers: { 'Content-Type': 'application/json' }
            }).then(function mySuccess(response) {
                $scope.response = response.data.status;
            }, function myError(response) {
                $scope.response = response.statusText;
            });
        };
    }]);