'use strict';

console.log("we in it boys")

var app = angular.module("MyApp", ["ngStorage"]);

app.controller('myCtrl', ['$scope', function($scope) {

	$scope.arrayOfObjects = [
		{name: "bob", size: "small", money: 10},
		{name: "bob", size: "small", money: 10},
		{name: "bob", size: "small", money: 10},
		{name: "bob", size: "small", money: 10},
		{name: "bob", size: "small", money: 10},
		{name: "bob", size: "small", money: 10},
		{name: "goe", size: "medium", money: 78},
		{name: "moe", size: "large", money: 89.7}	
	];
	$scope.keys = Object.keys($scope.arrayOfObjects[0]);

	$scope.addContact = function() {
		$scope.contacts.push($scope.newContact);
		
	}

	$scope.removeTask = function(){
		var index = $scope.arrayOfObjects.indexOf(this.obj);
		$scope.arrayOfObjects.splice(index, 1);
	}

	$scope.editTask = function(index) {

	}

}]);