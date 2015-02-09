var app = angular.module('LoanCalculator')

app.controller('mainCtrl', function($scope, bankService){
	bankService.getIntRate()
		.then(function(res){
			console.log(res);
			$scope.interest_rate = Number(res.data);
		})

		$scope.calculatePayment = function(){
			$scope.monthly_payment = ($scope.interest_rate / 100) * parseInt($scope.principal) * 2;
		}
	
})

