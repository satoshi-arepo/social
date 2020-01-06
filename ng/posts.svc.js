angular.module("app")
	.service("PostsSvc", function ($http) {
	this.fetch = () => $http.get("/api/posts");
	this.create = (p) => $http.post("/api/posts", p);
});
