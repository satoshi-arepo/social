angular.module('app')
	.controller('LoginCtrl', function ($scope, UserSvc) {
		$scope.login = function (username, password) {
			UserSvc.login(username, password)
				.then(response => $scope.$emit('login', response.data))
				.catch((fb => alert(fb + "  Unsuccessful login")));
		}
	});

