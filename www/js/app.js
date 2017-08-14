// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

  .state('app.empresas', {
    url: '/empresas',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/empresas.html',
        controller: 'EmpresasCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/empresas/:empresaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/empresa.html',
        controller: 'EmpresaCtrl'
      }
    }
  })
  
  .state('app.cartadepresentacion', {
      url: '/cartadepresentacion',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/CartaDePresentacion.html',
          controller: 'CartaDePresentacionCtrl'
        }
      }
    })
  .state('app.cartadeaceptacion', {
      url: '/cartadeaceptacion',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/CartaDeAceptacion.html',
          controller: 'CartaDeAceptacionCtrl'
        }
      }
    })
  .state('app.definiciondeprojecto', {
      url: '/definiciondeprojecto',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/DefinicionDeProjecto.html',
          controller: 'DefinicionDeProjectoCtrl'
        }
      }
    })
  .state('app.ceduladeregistro', {
      url: '/ceduladeregistro',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/CedulaDeRegistro.html',
          controller: 'CedulaDeRegistroCtrl'
        }
      }
    })
  .state('app.cartadeliberacion', {
      url: '/cartadeliberacion',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/CartaDeLiberacion.html',
          controller: 'CartaDeLiberacionCtrl'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/empresas');
});
