const app = angular.module("app", []);
app.controller("PostsCtrl", function ($scope, $http) {
	$scope.addPost = () => {
		if ($scope.postBody) {
			$http.post("http://localhost:3000/api/posts", {
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

	$http.get("http://localhost:3000/api/posts")
			 .success(posts => $scope.posts = posts);
});
