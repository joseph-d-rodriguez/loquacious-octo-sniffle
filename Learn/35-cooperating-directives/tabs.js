(function (angular) {
  "use strict";

  // Adapted from the Angular directive documentation

  angular.module('tabset', [])

  .directive('myTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function tabController($scope) {
        var panes = $scope.panes = [];

        $scope.select = function select(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        // Expose this function to another directive:
        this.addPane = function addPane(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          panes.push(pane);
        };
      },
      templateUrl: 'tabset.html'
    };
  })

  .directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function paneLink(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'tab.html'
    };
  });

})(window.angular);
