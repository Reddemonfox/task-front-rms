angular.module('admin').controller('OrderCtrl',function($scope){

    $scope.isCreating = true;
    $scope.items = [];
    $scope.newOrder = {};
    $scope.getItems = function () {
        $scope.items = [
            {
                'name': '111111',
                'id': 1,
                'type': 'REGULAR'
            },
            {
                'name': '22222222',
                'id': 2,
                'type': 'REGULAR'
            },
            {
                'name': '33333333',
                'id': 3,
                'type': 'COMPLEMENTARY'
            }
        ];
    };
    $scope.getItems();

});
