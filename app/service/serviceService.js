'use strict'
 angular.module('service.services',[])

  .service('serviceService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/service.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getService = function()
{
    return deffered.promise;
}

});