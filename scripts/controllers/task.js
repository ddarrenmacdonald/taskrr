'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location, $routeParams, toaster) {

	var ref = new Firebase(FURL);
	var fbTasks = $firebase(ref.child('tasks')).$asArray();
	var taskId = $routeParams.taskId;

	/* USED THIS SECTION TO EXPLAIN PROMISES
	fbTasks.$loaded().then(function(data) {
		console.log("Step 1: " + data.length);
	});

	console.log("Step 2: " + fbTasks.length);
	*/

	if(taskId) {
		$scope.selectedTask = getTask(taskId);
	}

	function getTask(taskId) {
		return $firebase(ref.child('tasks').child(taskId)).$asObject();
	}

	$scope.updateTask = function(task) {
		$scope.selectedTask.$save(task);
		toaster.pop('success', "Task is updated.");
		$location.path('/browse');
	}

	$scope.tasks = fbTasks;

	$scope.postTask = function(task) {
		fbTasks.$add(task);
		toaster.pop('success', "Task is created.");
		$location.path('/browse');
	}
});