var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
animateApp.config(function($routeProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
        .when('/check', {
            templateUrl: 'page-checkin.html',
            controller: 'checkinController'
        })
        .when('/settings', {
            templateUrl: 'page-settings.html',
            controller: 'settingsController'
        })
        .when('/profile', {
            templateUrl: 'page-profile.html',
            controller: 'profileController'
        })
        .when('/presence', {
            templateUrl: 'page-presence.html',
            controller: 'profileController'
        })

});

// CONTROLLERS ============================================
// HOME page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'homewrapper';
    //NG-cLOAK
});

// CHECK-IN page controller
animateApp.controller('checkinController', function($scope) {
    $scope.pageClass = 'checkinwrapper';
});

// SETTINGS page controller
animateApp.controller('settingsController', function($scope) {
    $scope.pageClass = 'settingswrapper';
});

// PROFILE page controller
animateApp.controller('profileController', function($scope) {
    $scope.pageClass = 'profilewrapper';
});

// PROFILE page controller
animateApp.controller('presenceController', function($scope) {
    $scope.pageClass = 'presencewrapper';
});
