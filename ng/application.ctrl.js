angular.module('app')
.controller('ApplicationCtrl', function($scope) {
	$scope.$on('login', (e, user) => $scope.currentUser = user);
});
