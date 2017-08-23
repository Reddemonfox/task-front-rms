angular.module('front', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'admin', 'LocalStorageModule', 'angucomplete-alt']);

angular.module('front').config(function( $stateProvider, $urlRouterProvider, $httpProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/admin');
    $httpProvider.interceptors.push('sessionInterceptor');
    $httpProvider.defaults.useXDomain = true;

});

angular.module('front').run(function($rootScope, $state, localStorageService) {

    // $state.go('admin');
    var token = localStorageService.get('session_token');
    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
