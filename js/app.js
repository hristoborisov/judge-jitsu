(function () {
    var app = angular.module("JudgeJitsu", ["ionic"]);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('register', {
              url: "/register",
              views: {
                  'register-tab': {
                      templateUrl: "views/register.html",
                      controller: 'RegisterController'
                  }
              }
          })
        .state('schedule', {
            url: "/schedule",
            views: {
                'schedule-tab': {
                    templateUrl: "views/schedule.html",
                    controller: 'ScheduleController'
                }
            }
        });

        $urlRouterProvider.otherwise("/register");
    });

})();