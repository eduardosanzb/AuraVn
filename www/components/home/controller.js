angular.module('veils.controllers')
.controller('HomeController',HomeController);
HomeController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$firebaseObject","$firebaseArray","$firebaseAuth","$ionicViewSwitcher","$ionicPopup"];

function HomeController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform, $firebaseObject, $firebaseArray, $firebaseAuth, $ionicViewSwitcher, $ionicPopup) {
  $scope.goToSelector = function(){
    
  }

  $scope.findYourVeil = function(){
    var auth = $firebaseAuth();
    auth.$signInAnonymously().then(function(user){
      console.log("YOu have been signed anonimously" + user);
      $state.go("selector");
    }).catch(function(error){
      console.log(error);
      alert("mmm");
      $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Sin Internet',
          template: 'No tienes internet, por lo tanto no podremos mandarte tus resultados a tu Correo Electronico.'
        });
        confirmPopup.then(function(res) {
          if(res) {
            console.log('Seguimos sin Internet =D');
            $state.go("selector");
          } else {
            console.log('=( Intenta conectarte');
          }
        });
      };
    });
    
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