describe('OrderCtrl', function() {

    beforeEach(module('admin'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('OrderCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});
