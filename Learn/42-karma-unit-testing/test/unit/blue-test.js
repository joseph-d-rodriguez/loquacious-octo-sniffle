describe("blue test suite", function () {
    beforeEach(module("blue"));

    var BlueController, $scope;
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        BlueController = $controller("BlueController",
                                        {$scope: $scope});
    }));

    it("should return the full name", function () {
        expect($scope.fullName()).toBe("John Baur");
        $scope.name.first = "Jack";
        $scope.name.last = "Bauer";
        expect($scope.fullName()).toBe("Jack Bauer");
    });
});
