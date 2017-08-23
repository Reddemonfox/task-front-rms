angular.module('admin').factory('sessionInterceptor',function($q, $injector, localStorageService, $rootScope,$timeout) {

    var sessionExpired = false;

    return {
        request: function (config) {
            console.log("asdf");
            var tokenobj = localStorageService.get('session_token');
            if(!tokenobj){ return config; }
            config.headers.authorization =   'Bearer ' + tokenobj;
            return config;
        }
    };
});
