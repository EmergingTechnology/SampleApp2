function userController($scope){
	//$scope.userCount = 10;


		$scope.users = [
	{name: "User 1"},
	{name: "User 2"},
	]

	$scope.createUser = function(){
		$scope.users.push({name: $scope.userName});
		$scope.userName = '';
	}
}
