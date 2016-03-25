'use strict'
var sitcoModule = angular.module('sitco.controllers',[]);

sitcoModule.controller('homeController',['$scope', function($scope){

//     var promise = homeService.getHome();
//    promise.then(function(data){
//    $scope.homes = data.data;
//    });

}]).controller('aboutController',['$scope','aboutService','whoWeAreService' , function($scope,aboutService,whoWeAreService){
    var promise = aboutService.getProcess();
    promise.then(function(data){
    $scope.processes = data.data;
    });
     var promise = whoWeAreService.getDetail();
    promise.then(function(data){
    $scope.details = data.data;
        console.log( $scope.details);
    });


}]).controller('serviceController', ['$scope','serviceService',function($scope, serviceService){
    var promise = serviceService.getService();
    promise.then(function(data){
    $scope.services = data.data;
       
    });

}]).controller('whoWeAreController',['$scope','whoWeAreService', function($scope,whoWeAreService){
     var promise = whoWeAreService.getDetail();
    promise.then(function(data){
    $scope.details = data.data;
        console.log( $scope.details);
    });


}]).controller('ourSkillsController', function($scope)
{

}).controller('contactController', ['contactService','$scope', function(contactService, $scope){
    var promise = contactService.getContact();
    promise.then(function(data){
    $scope.contacts = data.data;
        console.log($scope.contacts);
    });
     
}]).controller('portfolioController',['$scope','portfolioService', function($scope,portfolioService){
    var promise = portfolioService.getProject();
    promise.then(function(data){
    $scope.projects = data.data;
    })

}]).controller('portfolioReadMore',['$scope', '$stateParams','$state','portfolioService',function($scope,$stateParams,$state,portfolioService){
    
   var getProjectsById=function(id){
return portfolioService.getProjectById(id);
};
 var closeProject=function(){
$state.go('Portfolio');
};
$scope.singleProject=getPostById($stateParams.id);


}]).controller('signinController',['$scope', function($scope){
    
}])

.controller('signupController',['$scope', function($scope){
    
}]);

