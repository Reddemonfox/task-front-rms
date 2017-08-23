angular.module('admin').controller('LoginCtrl', function ($scope, Admin, localStorageService, $state) {
    $scope.login = function () {
        Admin.login($scope.user).then(function (successResponse) {
            localStorageService.set("session_token", successResponse.data.data.token)
            localStorageService.set("user", successResponse.data.data.user)
            if(successResponse.data.data.user.type === 'ADMIN'){
                // window.location = '/user';
                $state.go('user');
            }else{
                // window.location = '/task';
            }
        }, function (errorResponse) {
            alert("There is some error");
            console.log(errorResponse);
        });
    };

    $scope.user = {};
});
