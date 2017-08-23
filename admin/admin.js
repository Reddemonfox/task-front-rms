angular.module('admin', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('admin').config(function($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'admin/partial/admin/admin.html'
    });
    $stateProvider.state('branch', {
        url: '/branch',
        templateUrl: 'admin/partial/branch/branch.html'
    });
    $stateProvider.state('order', {
        url: '/order',
        templateUrl: 'admin/partial/order/order.html'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'admin/partial/login/login.html'
    });
});

