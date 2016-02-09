'use strict';


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

	$scope.storage = $localStorage.$default({
		contacts: JSON.stringify($scope.contacts)
	})

	$scope.keys = Object.keys;

	$scope.addContact = function() {
		var newContact = {
			name: $scope.contact.name,
			phone: $scope.contact.phone,
			email: $scope.contact.email
		}; 
		$scope.contacts.push(newContact);
		updateLocalStorage();
		this.contact = {};
	}

	$scope.removeTask = function(){
		var index = $scope.contacts.indexOf(this.obj);
		$scope.contacts.splice(index, 1);
		updateLocalStorage();
	}

	$scope.predicate = 'name';
	$scope.reverse = true;
	$scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };

	$scope.editTask = function(index) {

	}

	function updateLocalStorage() {
		$localStorage.contacts = JSON.stringify($scope.contacts);
	}

}]);