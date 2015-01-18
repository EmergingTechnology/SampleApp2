function userController($scope){
	//$scope.userCount = 10;

	$scope.users = []

	$scope.createUser = function(){
		$scope.users.push({name: $scope.userName});
		$scope.userName = '';
	}
}



function change(){
	document.getElementById("demo").innerHTML = "You clicked a user name!!!";
	setInterval(function(){document.getElementById("demo").innerHTML = ""},3000);

}
