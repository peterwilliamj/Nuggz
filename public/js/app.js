/**
 * Created by peterwilliamjohnson on 11/4/14.
 */
var app = angular.module("nuggz", ["ngRoute", "firebase"]);



app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/lists', {
            templateUrl: 'templates/lists/lists.html',
            controller: 'ListsCtrl'
        })
        .when('/friends', {
            templateUrl: 'templates/friends/friends.html',
            controller: 'FriendsCtrl'
        })
        .when('/intro', {
            templateUrl: 'templates/intro/intro.html',
            controller: 'IntroCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});