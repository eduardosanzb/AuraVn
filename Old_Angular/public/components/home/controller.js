angular.module('veils.controllers')
.controller('HomeController',HomeController);
HomeController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$firebaseObject","$firebaseArray","$firebaseAuth","$ionicViewSwitcher","$ionicPopup", "$cordovaNetwork"];

function HomeController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform, $firebaseObject, $firebaseArray, $firebaseAuth, $ionicViewSwitcher, $ionicPopup, $cordovaNetwork) {
  document.addEventListener("deviceready", function () {

    var type = $cordovaNetwork.getNetwork()

    var isOnline = $cordovaNetwork.isOnline()

    var isOffline = $cordovaNetwork.isOffline()


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      console.log('We are connected')
      $rootScope.connection = true
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      console.log('We are NOT connected')
      var offlineState = networkState;
      $rootScope.connection = false
    })
    console.log($rootScope)
  }, false);

  $scope.findYourVeil = function(){
    if($rootScope.connection){
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
    } else {
      $ionicLoading.show()
      $state.go("selector");
    }
    
    
  }
}