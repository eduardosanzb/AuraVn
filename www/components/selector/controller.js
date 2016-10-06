angular.module('veils.controllers')
.controller('SelectorController',SelectorController);
SelectorController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$ionicSlideBoxDelegate","$firebaseArray","$localStorage"];

function SelectorController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform,$ionicSlideBoxDelegate, $firebaseArray, $localStorage, $ionicSlides) {
  $scope.selection = {};
  $scope.currentIndex = 0;
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
  	//data.slider.lockSwipes();
  	$scope.flagDafuq = (data.slider.activeIndex === 0)? false: true;
    
	$ionicSlideBoxDelegate.enableSlide(false);
	$scope.slider = data.slider;
	console.debug($scope.slider)
  })
  $scope.$on('$ionicSlides.slideChangeStart', function(event, data){
	  console.log("Starting to change slide")
  })
  $scope.$on('$ionicSlides.slideChangeEnd', function(event, data){
	  console.log("Now: CurrentIdx = " + data.slider.activeIndex + " Previous: " + data.slider.previousIndex)
	  $scope.flagDafuq = (data.slider.activeIndex === 0)? false: true;
	  $scope.currentIndex = data.slider.activeIndex;
	  $scope.previousIndex = data.slider.previousIndex;
	  $scope.$apply()
  })
  $scope.goBack = function(){
    console.log("Cuz we`re going backwards baby")
    $scope.slider.slideTo($scope.currentIndex-1)
  }
  $scope.nextSlide = function(){
	  console.debug($scope.slider)
	  console.log("Moving to the next")
	  $scope.slider.slideTo($scope.currentIndex+1)

  }

  /* SELECTION FUNCTIONS */
  /* Strategy: 
     * 1.- Each function receive the selection from the View.html
     * 2.- After attach the selection to the selection object we 
     *      move to the next slide
     * 3.- In the last slide, we need to do several thins. Goto Function($scope.hairSelected).
     */
  $scope.dressSelected = function(selection){
    $scope.selection.dressStyle = selection;
    $scope.nextSlide();
  }
  $scope.dressStyle = function(selection){
    $scope.selection.embroidery = selection
    $scope.nextSlide();
  }
  $scope.bodySelected = function(selection){
    $scope.selection.body = selection;
    $scope.nextSlide();
  }
  $scope.heigthSelected = function(selection){
    $scope.selection.heigth = selection;
    $scope.nextSlide();
  }
  $scope.faceSelected = function(selection){
    $scope.selection.face = selection;
    $scope.nextSlide();
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