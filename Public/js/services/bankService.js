var app = angular.module('LoanCalculator')

app.service('bankService', function($http){
	this.getIntRate = function(){
		return $http({
			method: 'GET',
			url: "http://localhost:9001/interest_rate"
		})
	}
})