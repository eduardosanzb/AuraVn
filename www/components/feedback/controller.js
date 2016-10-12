angular.module('veils.controllers')
.controller('FeedbackController',FeedbackController);
FeedbackController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform", '$localStorage', '$firebaseArray', '$http', '$ionicPopup', 'ServerUrl'];

function FeedbackController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform, $localStorage, $firebaseArray, $http, $ionicPopup, ServerUrl) {
  $scope.decision = $localStorage.getObject('theDecision')
  $scope.selection = $localStorage.getObject('theSelection')

  function saveToFirebase(mail){
    console.log(mail)
    mail = mail ? mail: 'anonimo'
    var ref = firebase.database().ref()
    var array = $firebaseArray(ref.child('expobodaOct'))
    var objectToPush = {
      selections : $scope.selection,
      decisions : $scope.decision,
      mail: mail
    }
    console.log(objectToPush)
    array.$add(objectToPush).then(function(ref){
        var id = ref.key;
        console.log("added record with id " + id);
        array.$indexFor(id); // returns location in the array
      });
  }
  function clearLocalStorage(){
    $localStorage.setObject('theDecision', undefined)
    $localStorage.setObject('theSelection', undefined)
  }
  function sendToEmail(mail){
    $ionicLoading.show()
     /* STRATEGY:
     *  1. Create a Firebase object
     *  2. Get the db and the child
     *  3. Push the new object
     *  4. Send the data to the email server
     *  5. Clear localstorage and go to home
     */
     //if(true){
     if($rootScope.connection){
        saveToFirebase(mail)
        clearLocalStorage()
        var gama = ($scope.decision.bordado) ? 'Europa':'Lisa'
        var data = {
          mail:mail,
          content: {
            largos: $scope.decision.largo,
            capas: $scope.decision.capas,
            peinetas: $scope.decision.peinetas,
            gama: gama
          }
        }
        $http.post(ServerUrl + '/sayHello',angular.toJson(data)).then(function(response){
          console.log(response)
        }, function(error){
          console.log(error)
        })
        $state.go('home')
      
     } else {
      var queue = $localStorage.getObject('queue')
      if(queue == null){
          queue = []
        }
      var object = {
        decision : $scope.decision,
        selection : $scope.selection,
        mail : mail
      }
      queue.push(object)
      $localStorage.setObject('queue', queue)
     }
     $ionicLoading.hide()
     clearLocalStorage()
     $state.go('home');
  }
  $scope.openModal = function() {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="email" ng-model="data.email">',
        title: 'Escribe tu Correo Electrónico',
        subTitle: 'No te preocupes, no te vamos a molestar!',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Enviar</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.email) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.email;
              }
            }
          }
        ]
      });

      myPopup.then(function(res) {

        console.log('Tapped!', res);
        if(res){
          sendToEmail(res)  
        }
        

      });

     
  }
  
  $scope.justSave = function(){
    $ionicLoading.show()
    /* STRATEGY:
     *  1. Create a Firebase object
     *  2. Get the db and the child
     *  3. Push the new object
     *  4. Clear localstorage and go to home
     */
     saveToFirebase()
     clearLocalStorage()
     $state.go('home')
     $ionicLoading.hide()
  }
}