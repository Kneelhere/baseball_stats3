var app = angular.module("baseballStats", []);

app.controller("StatsController", function($scope){
	$scope.name = "";
	$scope.at_bats;
	$scope.runs;
	$scope.hits;
	$scope.first;
	$scope.second;
	$scope.third;
	$scope.home;
	$scope.rbi;
	$scope.bb;
	$scope.so;
	$scope.sb;
	$scope.steals;
	$scope.hbp;
})