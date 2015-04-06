'use strict';

app.controller('AuthController', function($scope, $location, Auth) {

	$scope.register = function(user) {
		Auth.register(user).then(function() {
			console.log("Register successfullly!");
			$location.path('/');
		}, function(err) {
			console.log("Error....");
		});
	};

	$scope.login = function(user) {
		Auth.login(user)
		.then(function() {
			console.log("Logged in successfullly!");
			$location.path('/');
		}, function(err) {
			console.log("Error...");
		});
	};

	$scope.changePassword = function(user) {
		Auth.changePassword(user)
		.then(function() {

			//Reset the form
			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';

			console.log("Password change successfullly!!");
		}, function(err) {
			console.log("Error...");

		});
	};

});