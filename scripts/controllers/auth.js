'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

	if(Auth.signedIn()) {
		$location.path('/');
	}

	$scope.register = function(user) {
		Auth.register(user).then(function() {
			toaster.pop('success', "Registered successfullly.");
			//console.log("Registered successfullly!");
			$location.path('/');
		}, function(err) {
			toaster.pop('error', "Something went wrong.");
			//console.log("Error....");
		});
	};

	$scope.login = function(user) {
		Auth.login(user)
		.then(function() {
			toaster.pop('success', "Logged in successfullly.");
			//console.log("Logged in successfullly!");
			$location.path('/');
		}, function(err) {
			toaster.pop('error', "Something went wrong.");
			//console.log("Error...");
		});
	};

	$scope.changePassword = function(user) {
		Auth.changePassword(user)
		.then(function() {

			//Reset the form
			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';
			toaster.pop('success', "Password changed successfullly.");
			//console.log("Password change successfullly!!");
		}, function(err) {
			toaster.pop('error', "Something went wrong.");
			//console.log("Error...");

		});
	};

});