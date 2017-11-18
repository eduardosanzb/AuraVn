angular.module('veils')
.filter('gama',gama);
gama.$inject = [];

function gama() {
  return theFilter

  function theFilter(input){
    // true es bordado => Europa
    // false es sin bordado => Lisa
    theValue = input ? 'Europa' : 'Lisa'
    return theValue
  }
}
