angular.module('app.controllers', [])
  
.controller('categoryCtrl', ['$scope', '$stateParams', 'categoryFactory', function ($scope, $stateParams, categoryFactory) {
    categoryFactory.getAll().then(function (response) {
        $scope.categories = response;
    }, function (error) {
        console.log(error)
    });
}])
   
.controller('bookCategoriesCtrl', ['$scope', '$stateParams', 'categoryFactory', function ($scope, $stateParams, categoryFactory) {
    // Use of $stateParams
    var categID = $stateParams.id;
    categoryFactory.getCategory(categID)
        .then(function (response) {
            var books = response;
            $scope.booksPerCategory = new Array();
            var j = 0;
            books.forEach(function(i){
                if (i.cat_id == categID) {
                    $scope.booksPerCategory[j] = i;
                    j++;
                } });
        }, function (error) {
            console.log(error);
        });
}])
   
.controller('bookDetailsCtrl', ['$scope', '$stateParams', 'categoryFactory', function ($scope, $stateParams, categoryFactory) {
    var bookID = $stateParams.bookid;
    categoryFactory.getProduct(bookID)
        .then(function(response) {
            $scope.book = response;
        }, function(error) {
            console.log(error);
        });
}])
   
.controller('authorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    