angular.module('app')
.service('UserSvc', function($http) {
	this.getUser = () => $http.get('/api/users');
	this.login = (u, p) => $http.post('/api/sessions', {
		username: u, password: p
	}).then(val => {
		this.token = val.data;
		$http.defaults.headers.common['X-Auth'] = val.data;
		return this.getUser();
	});
	this.register = (u, p) => $http.post('/api/users', {
		username: u, password: p
	}).then(alert(`Account ${u} created successfully!`))
	  .catch(fb => alert(fb + "  Unsuccessful"));
});
