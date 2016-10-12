// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('veils', ['ionic','veils.controllers','veils.services','veils.filters','firebase', 'ngCordova'])
.constant('ServerUrl', 'http://192.168.15.2:5000')
//.constant('ServerUrl', 'http://localhost:5000')
.run(function($ionicPlatform, $rootScope, firebase, $cordovaNetwork, $localStorage, syncService) {
  $ionicPlatform.ready(function() {
    console.log($localStorage.getObject('queue') == null)
    console.log('Running platform')
    console.log($cordovaNetwork)
    if ($cordovaNetwork.isOnline()){
      console.log('We are connected')
      $rootScope.connection = true
      console.log('Initializing firebase')
      var config = {
          apiKey: "AIzaSyB7UcYvIsPVD5NwAYnfyT647tmj8_R5sHc",
          authDomain: "project-5727664980691021648.firebaseapp.com",
          databaseURL: "https://project-5727664980691021648.firebaseio.com",
          storageBucket: "project-5727664980691021648.appspot.com",
        };
      firebase.initializeApp(config);
      var queue = $localStorage.getObject('queue')

      if( queue != null){
        queue.forEach(function(item){
          syncService.firebase(item).then(function(item){
            console.log('item saved with id ' + item.key)
          })
          if(item.mail != 'anonimo'){
            syncService.mail(item).then(function(response){
              console.log('mail sent')
              console.log(response)
            })
          }
        })
        $localStorage.setObject('queue', null)
      }
    } else {
      console.log('Not connected')
      $rootScope.connection = false
    }
    // Initialize Firebase
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
      console.log(cordova)
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
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
