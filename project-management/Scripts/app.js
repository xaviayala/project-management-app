//"use strict";
//(function () {
//    angular.module("pmApp", ["ngRoute"])
//        .config(["$routeProvider", function ($routeProvider) {
//            $routeProvider.when("/", {
//                templateUrl: "../Pages/Templates/project/view-all.html",
//                controller: "pmCtrl",
//            })
//            .when("/addProject", {
//                templateUrl: "../Pages/Templates/project/view-detail.html",
//                controller: "pmCtrl",
//            })
//            .when("/editProject/:projectId", {
//                templateUrl: "../Pages/Templates/project/view-detail.html",
//                controller: "pmCtrl",
//            }).otherwise({
//                redirectTo: "/"
//            });
//        }]);
//})();


// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('pmApp', ['ngAnimate', 'ui.router', 'pascalprecht.translate', 'ngFlag'])

// configuring our routes 
// =============================================================================
.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: '../Pages/Templates/form.html',
            controller: 'formCtrl'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: '../Pages/Templates/server/form-profile.html'
        })

        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: '../Pages/Templates/server/form-interests.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: '../Pages/Templates/server/form-payment.html'
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');

    
    $translateProvider.translations('en', {
        FORM_SERVER_TITLE: 'Add Server Form',
        SERVER_NAME: 'Server Name',
        SERVER_NAME_DESC: 'Internal server name',
        PROJECT: 'Project',
        PROJECT_DESC: 'Name of the project',
        DESCRIPTION: 'Description',
        DESCRIPTION_DESC: 'Brief description of the service functions',
        SOFTWARE_BASE: 'Software base',
        SOFTWARE_BASE_DESC: 'OS version',
        SOFTWARE_SERVICE: 'Software service',
        SOFTWARE_SERVICE_DESC: 'Software service version',
        TYPE: 'Type',
        DOMAIN: 'Domain',
        IP: 'IP',
        IP_DESC: 'Server IP address',
        LOCATION: 'Location',
        LOCATION_DESC: 'Virtual Server or CPD',
        SELECT: 'Please select',
        en: 'English',
        es: 'Español'
    })
    .translations('es', {
        FORM_SERVER_TITLE: 'Formulario de alta servidor',
        SERVER_NAME: 'Nombre del servidor',
        SERVER_NAME_DESC: 'Nombre interno del servidor',
        PROJECT: 'Proyecto',
        PROJECT_DESC: 'Denominación del proyecto',
        DESCRIPTION: 'Descripción',
        DESCRIPTION_DESC: 'Breve descripción de las funciones del servicio',
        SOFTWARE_BASE: 'Software base',
        SOFTWARE_BASE_DESC: 'Versión del sistema operativo',
        SOFTWARE_SERVICE: 'Software servicio',
        SOFTWARE_SERVICE_DESC: 'Versión del software de servicio',
        TYPE: 'Tipo',
        DOMAIN: 'Servidor en dominio',
        IP: 'Dirección IP',
        IP_DESC: 'IP del servidor',
        LOCATION: 'Situación',
        LOCATION_DESC: 'Servidor Virtual o CPD',
        SELECT: 'Elija un elemento',
        en: 'English',
        es: 'Español'
    });
    $translateProvider.preferredLanguage('en');
})




