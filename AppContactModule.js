var arrProducts = [];

var app = angular.module("MyContactApp", []);




app.controller('ContactController',
['$scope', '$http', function($scope, $http) {


	$scope.Send = function(){

		var SendData = {
          	"customer_name": $scope.customer_name,
			"customer_mail": $scope.customer_mail,
			"mail_content": $scope.mail_content,
			"customer_contact_number": $scope.customer_contact_number
			}

		$scope.Clear();

		$http.post("/sendfeed", SendData).success(function(){

		});

	};

	$scope.Clear = function(){

		$scope.customer_name 	= "";

		$scope.customer_mail 	= "";

		$scope.mail_content 	= "";

		$scope.customer_contact_number 	= "";
	};

}]);

