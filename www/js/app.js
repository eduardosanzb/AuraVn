// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('veils', ['ionic','veils.controllers','veils.services','veils.filters','firebase'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Initialize Firebase
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider){
  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-thin-left');
  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'components/home/view.html',
    controller: 'HomeController',
    resolve:{}
  })
  .state('selector',{
    url: '/selector',
    templateUrl: 'components/selector/view.html',
    controller: 'SelectorController',
    resolve:{}
  })
  .state('feedback',{
    url: '/feedback',
    templateUrl: 'components/feedback/view.html',
    controller: 'FeedbackController',
    resolve:{}
  })
  
  $urlRouterProvider.otherwise('/home');
})
