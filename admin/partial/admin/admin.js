angular.module('admin').controller('AdminCtrl', function ($scope, Admin, $state) {
    $scope.isCreating = false;
    $scope.newUser = {};
    $scope.selectedBranch = -1;
    $scope.getUsers = function () {
        Admin.getUsers().then(function (successResponse) {
            $scope.users = successResponse.data.data;
            console.log(successResponse);
        }, function (errResponse) {
            console.log('error');
        });
    };

    $scope.branches = [];
    $scope.getBranches = function () {
        $scope.branches = [
            {
                'name': 'ABC',
                'id': 1
            },
            {
                'name': 'ABCqwe',
                'id': 2
            },
            {
                'name': 'AqwBC',
                'id': 3
            }
        ];
    };

    $scope.getBranches();
    $scope.createUser = function () {
        if ($scope.newUser && $scope.newUser.password && ($scope.newUser.password != $scope.newUser.cPassword)) {
            alert('password mismatch');
            return;
        }
        if(!$scope.newUser.selectedBranch > 0){
            alert('select branch');
            return;
        }
        console.log($scope.newUser);
        // Admin.createUser($scope.newUser).then(function () {
        //
        // }, function () {
        //     $scope.isCreating = false;
        // });
    };

    $scope.getUsers();
});
