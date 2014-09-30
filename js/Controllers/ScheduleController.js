(function () {
    var scheduleController = function ($scope) {
        $scope.test = "Hello";
    };

    var app = angular.module("JudgeJitsu");
    app.controller("MainController", ["$scope", scheduleController]);

})();