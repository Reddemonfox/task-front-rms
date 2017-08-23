angular.module('admin').directive('header', function(Admin, localStorageService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'admin/directive/header/header.html',
        link: function(scope, element, attrs, fn) {
            scope.user = localStorageService.get('user');
            scope.logout = function () {
              Admin.logout();
            };
            scope.isAuthenticated = Admin.isAuthenticated();
        }
    };
});
