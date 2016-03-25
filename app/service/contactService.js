'use strict'
angular.module('contact.services',[])

.service('contactService', function($http, $q) {

var deffered = $q.defer();
    $http.get('../../sitco2/json/contact.json').then(function(data){
    
     deffered.resolve(data);
    });
this.getContact = function()
{
    return deffered.promise;
}

});