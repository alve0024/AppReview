angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home.category', {
    url: '/category',
    views: {
      'tab1': {
        templateUrl: 'templates/category.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('home.bookCategories', {
    url: '/book-categories',
    views: {
      'tab1': {
        templateUrl: 'templates/bookCategories.html',
        controller: 'bookCategoriesCtrl'
      }
    }
  })

  .state('home.bookDetails', {
    url: '/book-details',
    views: {
      'tab1': {
        templateUrl: 'templates/bookDetails.html',
        controller: 'bookDetailsCtrl'
      }
    }
  })

  .state('home.author', {
    url: '/author',
    views: {
      'tab2': {
        templateUrl: 'templates/author.html',
        controller: 'authorCtrl'
      }
    }
  })

  .state('home.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/home/category')

  

});