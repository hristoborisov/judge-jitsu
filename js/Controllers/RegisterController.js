(function () {
    var registerController = function ($scope) {
        $scope.test = "Hello";
    };

    var app = angular.module("JudgeJitsu");
    app.controller("RegisterController", ["$scope", registerController]);

})();