'use strict'
angular.module('whoWeAre.services', [])
 .service('whoWeAreService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/whatWeAre.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getDetail = function()
{
    return deffered.promise;
}
});