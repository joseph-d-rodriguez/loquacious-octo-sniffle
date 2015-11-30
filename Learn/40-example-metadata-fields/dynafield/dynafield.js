(function (angular) {
  "use strict";

  angular.module('dynafield', [
    'ngMessages',
    'dynafield.ssn',
    'dynafield.date',
    'dynafield.phone',
    'dynafield.zip',
    'dynafield.email',
    'dynafield.select',
    'dynafield.text'
    ])

    .directive('dynafield', function (fieldDictionary, $log) {
      return {
        restrict: "E",
        template: loadTemplate,
        link: dynafieldLink,
        require: '^form',
        scope: {
          "model": "="
        }
      }

      function load(elem, attrs) {
        var entityName = attrs.entity || attrs.model.split(".")[0];
        var fieldName = attrs.field || attrs.model.split(".")[1];

        var fd = fieldDictionary;
        if (fd[entityName] && fd[entityName][fieldName]) {
          return {
            entityName: entityName,
            fieldName: fieldName,
            meta: fd[entityName][fieldName]
          };
        } else {
          $log.error("No metadata for", entityName, fieldName, elem);
        }
      }

      function loadTemplate(elem, attrs) {
        var x = load(elem, attrs);
        if (x) {
          return template("<dynafield-" + x.meta.widget +
            "></dynafield-" + x.meta.widget + ">");
        } else {
          return template("<b>MISSING meta</b>");
        }
      }

      function dynafieldLink(scope, element, attrs, form) {
        var x = load(element, attrs);
        scope.meta = {};
        if(x) {
          scope.meta = x.meta;
          scope.maskOpts = { clearOnBlur: false };
          scope.inputId = x.entityName + "-" + x.fieldName;
          scope.inputObj = function() {
            return form[scope.inputId];
          };
        }
      }
    });

  // There are other ways to dynamically choose a directive to
  // include; this one is straightforward and requires little
  // additional Angular understanding.

  var baseTemplate = `
<div class="form-group text-container">
  <div class="col-sm-4">
    <label ng-bind="meta.label" for="{{inputId}}"></label>
  </div>
  <div class="col-sm-8">
    HERE
    <ng-messages for="inputObj().$error" role="alert">
      <ng-message when="maxlength">
        <span class="label label-warning">Too Long</span>
      </ng-message>
      <ng-message when="integer">
        <span class="label label-warning">Not an integer</span>
      </ng-message>
      <ng-message when="min">
        <span class="label label-warning">Value too small</span>
      </ng-message>
      <ng-message when="max">
        <span class="label label-warning">Value too large</span>
      </ng-message>
      <ng-message when="required"
        ng-if='inputObj().$dirty'>
        <span class="label label-warning">Required field</span>
      </ng-message>
    </ng-messages>
  </div>
</div>
`;

  function template(inner) {
    return baseTemplate.replace("HERE", inner);
  }

})(window.angular);
