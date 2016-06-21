angular.module('veils.controllers')
.controller('SelectorController',SelectorController);
SelectorController.$inject = ["$rootScope", "$scope", "$state", "$ionicModal", "$ionicLoading", "$localStorage", "$ionicPlatform","$ionicSlideBoxDelegate"];

function SelectorController($rootScope, $scope, $state, $ionicModal, $ionicLoading, $localStorage, $ionicPlatform,$ionicSlideBoxDelegate) {
$scope.selection = {};
  $scope.lockSlide = function(){
    $ionicSlideBoxDelegate.enableSlide(false);  
  }
  $scope.goBack = function(){
    $ionicSlideBoxDelegate.previous();
  }
  $scope.dressSelected = function(selection){
    $scope.selection.dressType = selection;
    $ionicSlideBoxDelegate.next();
  }

  
}