angular.module('veils.controllers')
.controller('SelectorController',SelectorController);
SelectorController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$ionicSlideBoxDelegate","$firebaseArray","$localStorage"];

function SelectorController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform,$ionicSlideBoxDelegate, $firebaseArray, $localStorage) {
  $scope.selection = {};
  /**/

  /* NAVIGATIONS AND SLIDER CONFIGURATIONS OPTIONS */
  $scope.lockSlide = function(){
    /* Strategy: 
     * 1.- When the view initiate the slider, we block the sliding
     */
    $ionicSlideBoxDelegate.enableSlide(false);
  }
  $scope.sliderOptions = {
	  loop: false,
	  effect: 'fade',
	  speed: 500
  }
  $scope.$on('$ionicSlides.sliderInitialized', function(event, data){
	$ionicSlideBoxDelegate.enableSlide(false);
	$scope.slider = data.slider;
  })
  $scope.goBack = function(){
    /* Strategy: 
     * 1.- Go back to the previous slide.
     */
    $ionicSlideBoxDelegate.previous();
  }

  /* SELECTION FUNCTIONS */
  /* Strategy: 
     * 1.- Each function receive the selection from the View.html
     * 2.- After attach the selection to the selection object we 
     *      move to the next slide
     * 3.- In the last slide, we need to do several thins. Goto Function($scope.hairSelected).
     */
  $scope.dressSelected = function(selection){
    $scope.selection.dress = selection;
    $ionicSlideBoxDelegate.next();
  }
  $scope.dressStyle = function(selection){
    $scope.selection.dress.type = selection;
    $ionicSlideBoxDelegate.next();
  }
  $scope.bodySelected = function(selection){
    $scope.selection.body = selection;
    $ionicSlideBoxDelegate.next();
  }
  $scope.heigthSelected = function(selection){
    $scope.selection.heigth = selection;
    $ionicSlideBoxDelegate.next();
  }
  $scope.hairSelected = function(selection){
    /* Strategy: 
     * 1.- After receiving the last selection, we create the object and 
     *      we call the decision tree to get the options.
     * 2.- We create a new session to firebase to push the new object.
     * 3.- We dont close the session, because we want to get the **personal data**
     *      of the user.
     */
    $scope.selection.hair = selection;

    var ref = firebase.database().ref().child("selections");
    var object = $firebaseArray(ref);
    object.$add($scope.selection).then(function(ref){
      console.log(ref.key);
      $localStorage.set("refKey",ref.key);
      $state.go('feedback');
    });    

  }


  
}