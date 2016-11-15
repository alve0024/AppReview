angular.module('app.services', [])

.factory('categoryFactory', ['$http', '$q', function($http, $q){
    return {
        getAll: function() {
            var deferred = $q.defer();
            $http.get('data.json').then(function(response){
                deferred.resolve(response.data.categories);
                // console.log(re)
            }, function (error) {
                console.log(error);
            });
            // CategoryService returning list of categories
            // 	Use of promises in your service
            return deferred.promise;
        },
        getCategory: function() {
            var deferred = $q.defer();
            $http.get('data.json').then(function(response){
                deferred.resolve(response.data.books);
            }, function (error) {
                console.log(error);
            });
            // Returning list of products
            // Use of promises in your service
            return deferred.promise;
        },
        getProduct: function(id) {
            var deferred = $q.defer();
            $http.get('data.json').then(function(response){
                var book = response.data.books;
                deferred.resolve(book.filter(x => x._id == id));
            }, function (error) {
                console.log(error);
            });
            // Returning product lookup by Id
            // Use of promises in your service
            return deferred.promise;
        }
    }
}])

.service('BlankService', [function(){

}]);