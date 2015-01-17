function userController($scope){
	//$scope.userCount = 10;

	$scope.users = []

	$scope.createUser = function(){
		$scope.users.push({name: $scope.userName});
		$scope.userName = '';
	}
}
