angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

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
    url: '/:id',
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