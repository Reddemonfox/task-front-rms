angular.module('admin').factory('Admin', function ($state,  localStorageService, $http) {
    var API_URL = 'http://localhost:8000/api/';
    var Admin = {
        getUsers: getUsers,
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        createUser: createUser
    };

    function isAuthenticated() {
        return localStorageService.get('session_token') !== null;
    }

    function createUser(data) {
        return $http.post(API_URL + "users", data);
    }

    function login(data) {
        return $http.post(API_URL + "authenticate", data);
    }

    function logout(data) {
        localStorageService.remove('user');
        localStorageService.remove('session_token');
        // window.location = '/login';
        $state.go('login');
        return true;
    }

    function getUsers() {
        return $http.get(API_URL + "users");
    }

    return Admin;
});
