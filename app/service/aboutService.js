'use strict'
angular.module('about.services',[])

.service('aboutService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/about.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getProcess = function()
{
    return deffered.promise;
}

});