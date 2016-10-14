angular.module('veils.controllers')
.controller('SelectorController',SelectorController);
SelectorController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$ionicSlideBoxDelegate"];

function SelectorController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform,$ionicSlideBoxDelegate) {
  $ionicLoading.hide()
  $scope.selection = {};
  $scope.currentIndex = 0;
  $scope.decision = {
    largo: [],
    capas: [],
    peinetas: null,
    bordado: null
  }
  /**/
  $scope.heights = []
  for (var i = 120; i < 220; i++) {
    $scope.heights.push(i)
  }
  $scope.selection.height = 158
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
	  speed: 500,
    pagination: false
  }
  $scope.$on('$ionicSlides.sliderInitialized', function(event, data){
  	//data.slider.lockSwipes();
  	$scope.flagDafuq = (data.slider.activeIndex === 0)? false: true;
    
	$ionicSlideBoxDelegate.enableSlide(false);
	$scope.slider = data.slider;
	console.debug($scope.slider)
  })
  $scope.$on('$ionicSlides.slideChangeStart', function(event, data){
	  //console.log("Starting to change slide")
  })
  $scope.$on('$ionicSlides.slideChangeEnd', function(event, data){
	  //console.log("Now: CurrentIdx = " + data.slider.activeIndex + " Previous: " + data.slider.previousIndex)
	  $scope.flagDafuq = (data.slider.activeIndex === 0)? false: true;
	  $scope.currentIndex = data.slider.activeIndex;
	  $scope.previousIndex = data.slider.previousIndex;
	  $scope.$apply()
  })
  $scope.goBack = function(){
    //console.log("Cuz we`re going backwards baby")
    $scope.slider.slideTo($scope.currentIndex-1)
  }
  $scope.nextSlide = function(){
	  //console.debug($scope.slider)
	  //console.log("Moving to the next")
	  $scope.slider.slideTo($scope.currentIndex+1)

  }

  /* SELECTION FUNCTIONS */
  /* Strategy: 
     * 1.- Each function receive the selection from the View.html
     * 2.- After attach the selection to the selection object we 
     *      move to the next slide
     * 3.- In the last slide, we need to do several thins. Goto Function($scope.hairSelected).
     */
  
  function injectLargos(array){
    array.map(function(x){$scope.decision.largo.push(x)})
  }
  function injectCapas(array){
    array.map(function(x){$scope.decision.capas.push(x)})
  }
  $scope.dressSelected = function(selection){
    $scope.selection.dressStyle = selection;
    if(selection === 'a'){
      injectLargos([3,4,6,7,8])
      injectCapas([2])
    } else if(selection === 'sirena'){
      injectLargos([3,5,6,7])
      injectCapas([1,2])
    } else if (selection === 'recto'){
      injectLargos([7,8])
      injectCapas([2])
    } else if (selection === 'griego'){
      injectLargos([4,5,6])
      injectCapas([1])
    } else {
      injectLargos([3,4])
      injectCapas([1])
    }
    $scope.nextSlide();
  }
  $scope.dressStyle = function(selection){
    $scope.selection.embroidery = selection
    $scope.decision.bordado = (selection === 'cargado') ? false : true
    $scope.nextSlide();
  }
  $scope.faceSelected = function(selection){
    $scope.selection.face = selection;
    if(selection === 'ovalado'){
      injectLargos([3,4,6,7,8])
      injectCapas([1,2])
    } else if(selection === 'cuadrado'){
      injectLargos([5,6,7,8])
      injectCapas([1])
    } else if(selection === 'corazon'){
      injectLargos([2,3,4])
      injectCapas([1,2])
    } else {
      injectLargos([2,3])
      injectCapas([2])
    }
    $scope.nextSlide();
  }
  $scope.hairSelected = function(selection){
    $scope.selection.hair = selection;
    $scope.decision.peinetas = (selection === 'suelto') ? 1 : 2
    $scope.nextSlide();
  }
  $scope.heigthSelected = function(){
    /* Strategy: 
     * 1.- Find more popular in largo && capas
     *  1.1.- Largo can be multiple options
     *  1.2.- If in capas we have 2, stay 2.
     * 2.- 
     * 3.- We dont close the session, because we want to get the **personal data**
     *      of the user.
     */
    $scope.decision.largo.sort()
    var repeated = function(array){
        var i = 0
        var length = array.length
        var flag = false
        while (i !== length) {
          var current = array[i]
          for(var j = i+1; j < array.length-1; j++){
            if(current === array[j]){
              flag = true
              break;
            }
          }
          i++
        }
        return flag
      }

    if(repeated($scope.decision.largo)){
      $scope.decision.largo = $scope.decision.largo.reduce(function(total, curr, indx, array){
          var nextNumber = array[indx+1]
          if(curr === nextNumber){
            total.push(nextNumber)
          } 
          return total
        }, [])
    } else {
      $scope.decision.largo = $scope.decision.largo
    }
    // $scope.decision.largo = $scope.decision.largo.reduce(function(total, curr, indx, array){
    //   var nextNumber = array[indx+1]
    //   if(curr === nextNumber){
    //     total.push(nextNumber)
    //   }
    //   return total
    // }, [])
    $scope.decision.capas = ($scope.decision.capas.some(function(x){return x === 2}))
                        ? 2 : 1
    $scope.decision.tooLarge = ($scope.selection.heigth > 185) ? true : false

    $localStorage.setObject('theDecision', $scope.decision)
    $localStorage.setObject('theSelection', $scope.selection)
    console.log($scope.decision)
    $scope.slider.slideTo(0)
    $state.go('feedback')
  }

  


  
}