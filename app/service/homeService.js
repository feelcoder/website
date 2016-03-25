'use strict'
angular.module('home.services',[])

.service('homeService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/home.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getHome = function()
{
    return deffered.promise;
}

});