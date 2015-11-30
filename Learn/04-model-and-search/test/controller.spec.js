describe('The user module', () => {
  beforeEach(module('app'));

  var CountryController, $scope;
  beforeEach(inject(($controller, $rootScope) => {
    $scope = $rootScope.$new();
    CountryController = $controller('CountryController', {$scope: $scope});
  }));

  it('should initialize the user name', () => {
    expect($scope.countries.length).toEqual(7);
  });
});
