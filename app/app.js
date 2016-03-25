'use strict'
angular.module('sitco',['sitco.controllers','portfolio.services','service.services','about.services','whoWeAre.services','home.services','contact.services','ui.router']);

angular.module('sitco')
    .config(['$stateProvider','$locationProvider','$urlRouterProvider',function ($stateProvider,$locationProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('Home');
        $stateProvider
        .state('Home', {
                 url: '/Home',
                templateUrl: 'sitco2/app/views/home.html',
            controller: 'homeController',
            activetab :'home'
        }).state('About', {
                url: '/About',
                templateUrl: 'sitco2/app/views/about.html',
                controller: 'aboutController',
            activetab: 'about'
                    }).state('Service',{
                     url:'/Service',
                     templateUrl:'sitco2/app/views/service.html',
            controller:'serviceController',
            activetab :'service'
                             
        }).state('Contact',{
        
                url:'/Contact',
                templateUrl: 'sitco2/app/views/contact.html',    
                controller: 'contactController'
        }).state('Portfolio',{
        
                 url:'/Portfolio',
                 templateUrl :'sitco2/app/views/portfolio.html',
               controller: 'portfolioController'
        }).state('singleProject',{
                 url : '/Portfolio/:id/:permalink',
                 templateUrl : 'sitco2/app/views/projectDetail.html',
            controller:'portfolioReadMore'
                 
        }).state('signin',{                   
                    url: '/signin',
                    templateUrl:'sitco2/app/views/signin.html',
                controller:'signinController'
            }).state('signup',{                   
                    url: '/signup',
        
                         templateUrl:'sitco2/app/views/signup.html',
                         controller:'signupController',
    
                       
                 
          
            }) ;
        
}]).
    config(['$locationProvider', function($location){        
//        $location.hashPrefix('#/');
//          $location.html5Mode(true);
 
}]);



//'urlRouteProvider','$stateProvider','$locationProvider'