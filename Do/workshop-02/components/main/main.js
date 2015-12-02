;(function(angular) {
    angular.module('mainApp', ['backpacks'])

    .controller('MainController', function MainControllerConstructor() {
        this.superAwesomeStuff = 'foobar';
    })

    .directive('mainPage', function() {
        return {
            restrict: 'E',
            templateUrl: './components/main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        }
    });
})(window.angular);