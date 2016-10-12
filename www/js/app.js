// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('veils', ['ionic','veils.controllers','veils.services','veils.filters','firebase', 'ngCordova'])
.run(function($ionicPlatform, $rootScope, firebase) {
  $ionicPlatform.ready(function() {
    console.log('Running platform')
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
    if(window.Connection){
      alert(window)
      console.log('we have windoes')
      if(navigator.connection.type == Connection.NONE){
        $rootScope.connection = false
        alert('No internet Connection')
      } else {
        $rootScope.connection = true
        var config = {
          apiKey: "AIzaSyB7UcYvIsPVD5NwAYnfyT647tmj8_R5sHc",
          authDomain: "project-5727664980691021648.firebaseapp.com",
          databaseURL: "https://project-5727664980691021648.firebaseio.com",
          storageBucket: "project-5727664980691021648.appspot.com",
        };
        firebase.initializeApp(config);
        alert('Connection!!')
      }     
    } else {
      var config = {
          apiKey: "AIzaSyB7UcYvIsPVD5NwAYnfyT647tmj8_R5sHc",
          authDomain: "project-5727664980691021648.firebaseapp.com",
          databaseURL: "https://project-5727664980691021648.firebaseio.com",
          storageBucket: "project-5727664980691021648.appspot.com",
        };
      firebase.initializeApp(config);
      console.log("yeah firebase")
    }

  });
})
.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider){

  $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.navBar.alignTitle('center')
  $stateProvider.state('home',{
    cache: false,
    url: '/home',
    templateUrl: 'components/home/view.html',
    controller: 'HomeController',
    resolve:{}
  })
  .state('selector',{
    cache: false,
    url: '/selector',
    templateUrl: 'components/selector/view.html',
    controller: 'SelectorController',
    resolve:{}
  })
  .state('feedback',{
    cache: false,
    url: '/feedback',
    templateUrl: 'components/feedback/view.html',
    controller: 'FeedbackController',
    resolve:{}
  })
  
  $urlRouterProvider.otherwise('/home');
})
