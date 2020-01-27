angular.module("app")
	.controller("PostsCtrl", function ($scope, PostsSvc) {
	$scope.addPost = () => {
		if ($scope.postBody) {
			PostsSvc.create({
				username: $scope.currentUser.username,
				body: $scope.postBody
			}).success(post => {
				$scope.posts.unshift({
					username: $scope.currentUser.username,
					body: $scope.postBody
				});
				$scope.postBody = null;
			});
		}
	}

	PostsSvc.fetch().success(posts => $scope.posts = posts);
});
