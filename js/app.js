(function () {
    var app = angular.module("JudgeJitsu", ["ionic", "firebase"]);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "views/tabs.html"
            })
          .state('tabs.sessions', {
              url: "/sessions",
              views: {
                  'sessions-tab': {
                      templateUrl: "views/sessions.html",
                      controller: 'RegisterController'
                  }
              }
          })
        .state('tabs.schedule', {
            url: "/schedule",
            views: {
                'schedule-tab': {
                    templateUrl: "views/schedule.html",
                    controller: 'ScheduleController'
                }
            }
        })
         .state('tabs.register', {
             url: "/register",
             views: {
                 'sessions-tab': {
                     templateUrl: "views/register.html",
                     controller: 'RegisterController'
                 }
             }
         });

        $urlRouterProvider.otherwise("/tab/sessions");
    });

})();