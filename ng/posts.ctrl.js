angular.module("app")
	.controller("PostsCtrl", function ($scope, PostsSvc) {
	$scope.addPost = () => {
		if ($scope.postBody) {
			PostsSvc.create({
				username: "max",
				body: $scope.postBody
			}).success(post => {
				$scope.posts.unshift({
					username: "max",
					body: $scope.postBody
				});
				$scope.postBody = null;
			});
		}
	}

	PostsSvc.fetch().success(posts => $scope.posts = posts);
});
