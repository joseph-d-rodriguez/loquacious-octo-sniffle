(function (angular) {
  'use strict';

  // Adapter from the Angular directive documentation

  angular.module('drag', [])
  .directive('makeDraggable', function($document) {

    function dragLink(scope, element, attr) {
        var startX = 0,
          startY = 0,
          x = 0,
          y = 0;

        element.css({
          position: 'relative',
          border: '1px solid green',
          padding: '3px',
          backgroundColor: '#EEE',
          cursor: 'pointer'
        });

        element.on('mousedown', function(event) {
          // Prevent selection of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          // watch the whole window
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        // Angular/browser will clean up the element.on()
        // listeners for us.

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      }

    return {
      restrict: 'A',
      link: dragLink
    };
  });

})(window.angular);
