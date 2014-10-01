(function () {
    var registerController = function ($scope, $firebase) {

        var ref = new Firebase("https://judgejitsu.firebaseio.com/sessions");

        $scope.sessions = $firebase(ref).$asArray();
    };

    var app = angular.module("JudgeJitsu");
    app.controller("RegisterController", ["$scope","$firebase", registerController]);

})();