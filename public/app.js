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
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
})

// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'homewrapper';
});

// about page controller
animateApp.controller('checkinController', function($scope) {
    $scope.pageClass = 'checkinwrapper';
});
