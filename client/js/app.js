var app = angular.module('userApp', ['ngResource']);

app.controller('userController', ['$scope', '$resource',
function ($scope, $resource){
  $scope.users = []

  $scope.createUser = function(){
    $scope.users.push({name: $scope.userName});
    $scope.userName = '';
  }
}]);
