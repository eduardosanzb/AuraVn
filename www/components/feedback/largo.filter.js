angular.module('veils')
.filter('largo',largo);
largo.$inject = [];

function largo() {
  return theFilter

  function theFilter(input){
    var theResult = ''

    switch(input) {
        case  1 :
            theResult = 'Blush / Fránces';
            break;
        case 2 :
            theResult = 'Hombros'
            break;
        case 3 :
            theResult = 'Codos'
            break;
        case 4 :
            theResult = 'Dedos'
            break;
        case 5 :
            theResult = 'Vals'
            break;
        case 6 :
            theResult = 'Capilla'
            break;
        case 7 :
            theResult = 'Catedral'
            break;
        case 8 :
            theResult = 'Real'
            break;
    }
    return theResult
  }
}
