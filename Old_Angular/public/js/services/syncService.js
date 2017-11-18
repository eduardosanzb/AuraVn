angular.module('veils.services')
    .factory('syncService', syncService);
syncService.$inject = ['$http', '$firebaseArray', 'ServerUrl'];
function syncService($http, $firebaseArray, ServerUrl) {
    return {
        firebase: function (item) {

            mail = item.mail
            var ref = firebase.database().ref()
            var array = $firebaseArray(ref.child('expobodaOct'))
            var objectToPush = {
                selections: item.selection,
                decisions: item.decision,
                mail: item.mail
            }
            console.log(objectToPush)
            return array.$add(objectToPush);
        },
        mail: function (item) {
            var gama = (item.decision.bordado) ? 'Europa' : 'Lisa'
            var data = {
                "mail": item.mail,
                content: {
                    largos: item.decision.largo,
                    capas: item.decision.capas,
                    peinetas: item.decision.peinetas,
                    gama: gama
                }
            }
            console.log(angular.toJson(data));
            return $http.post(ServerUrl + '/sayHello', $httpParamSerializer({
                mail: item.mail,
                largos: item.decision.largo,
                capas: item.decision.capas,
                peinetas: item.decision.peinetas,
                gama: gama
            }))
        }
    }
}