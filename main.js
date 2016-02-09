'use strict';

console.log("we in it boys")

var app = angular.module("MyApp", ["ngStorage", "ui.bootstrap"]);

app.controller('myCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {

	if ($localStorage.contacts) {
		$scope.contacts = JSON.parse($localStorage.contacts);
	} else {
		$scope.contacts = [];
	}

	// $scope.contacts = [
	// 	{ name: "Johnny Boy", phone: 555555555, email: "johnny@me.com"},
	// 	{ name: "Tommy Boy", phone: 666555555, email: "tommy@me.com"}
	// ];

	var data = JSON.stringify($scope.contacts);

	$scope.storage = $localStorage.$default({
		contacts: data
	})

	$scope.keys = Object.keys;

	$scope.addContact = function() {
		$scope.contacts.push($scope.contact);
		updateLocalStorage();
	}

	$scope.removeTask = function(){
		var index = $scope.contacts.indexOf(this.obj);
		$scope.contacts.splice(index, 1);
		updateLocalStorage();
	}

	$scope.editTask = function(index) {

	}

	function updateLocalStorage() {
		$localStorage.contacts = JSON.stringify($scope.contacts);
	}

}]);