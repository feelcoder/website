'use strict'
angular.module('portfolio.services',[])

.service('portfolioService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/portfolio.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getProject = function()
{
    return deffered.promise;
}

});



    
