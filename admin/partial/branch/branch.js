angular.module('admin').controller('BranchCtrl',function($scope){
    $scope.isCreating = false;
    $scope.newBranch = {};
    $scope.selectedBranch = -1;

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
    $scope.createBranch = function () {

        console.log($scope.newBranch);
        // Admin.createUser($scope.newUser).then(function () {
        //
        // }, function () {
        //     $scope.isCreating = false;
        // });
    };


});
