angular.module('veils.controllers')
.controller('HomeController',HomeController);
HomeController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$firebaseObject","$firebaseArray","$firebaseAuth","$ionicViewSwitcher"];

function HomeController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform, $firebaseObject, $firebaseArray, $firebaseAuth, $ionicViewSwitcher) {
  $scope.goToSelector = function(){
    //$state.go('selector');
    var auth = $firebaseAuth();
    auth.$signInAnonymously().then(function(user){
      console.log(user);
    }).catch(function(error){
      console.log(error);
    });
  }

  $scope.findYourVeil = function(){
    //$ionicViewSwitcher.nextDirection("back");
    $state.go("selector");
  }

  // $scope.addSomething = function(){
  //   var ref = firebase.database().ref().child("test");

  //   var object = $firebaseArray(ref);
  //   object.$add({lalo:"lalo"});  
  // }
  //  var ref = firebase.database().ref().child("messages");
  // // create a synchronized array
  // $scope.messages = $firebaseArray(ref);
  // // add new items to the array
  // // the message is automatically added to our Firebase database!
  // $scope.addMessage = function(message) {
  //   console.log(message)
  //   $scope.messages.$add({
  //     text: "test"
  //   }).catch(function(error){console.log(error)});
  // };

}