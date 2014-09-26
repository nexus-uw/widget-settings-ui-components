(function () {
  "use strict";

  angular.module("risevision.widget.common.widget-button-toolbar", ["risevision.widget.common.translate"])
    .directive("widgetButtonToolbar", ["$templateCache", function ($templateCache) {
      return {
        restrict: "E",
        scope: {
          // TODO: to be determined
        },
        template: $templateCache.get("_angular/widget-button-toolbar/widget-button-toolbar.html"),
        link: function () {
          // TODO: functionality to come
        }
      };
    }]);
}());

(function(module) {
try { app = angular.module("risevision.widget.common.widget-button-toolbar"); }
catch(err) { app = angular.module("risevision.widget.common.widget-button-toolbar", []); }
app.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("_angular/widget-button-toolbar/widget-button-toolbar.html",
    "<div class=\"btn-toolbar\">\n" +
    "  <button id=\"save\" class=\"btn btn-success btn-fixed-width\" type=\"button\">\n" +
    "    <span>{{\"common.buttons.save\" | translate}}</span>\n" +
    "    <i class=\"fa fa-white fa-check icon-right\"></i>\n" +
    "  </button>\n" +
    "  <button id=\"cancel\" class=\"btn btn-primary btn-fixed-width\" type=\"button\">\n" +
    "    <span>{{\"common.buttons.cancel\" | translate}}</span>\n" +
    "    <i class=\"fa fa-white fa-times icon-right\"></i>\n" +
    "  </button>\n" +
    "  <a type=\"button\" class=\"btn btn-rv-help btn-fixed-width\" href=\"\" target=\"_blank\">\n" +
    "    <span>{{\"common.buttons.help\" | translate}}</span>\n" +
    "    <i class=\"fa fa-question-circle icon-right\"></i>\n" +
    "  </a>\n" +
    "  <a type=\"button\" class=\"btn btn-rv-help btn-fixed-width\" href=\"\" target=\"_blank\">\n" +
    "    <span>{{\"common.buttons.contribute\" | translate}}</span>\n" +
    "    <i class=\"fa fa-github fa-lg\"></i>\n" +
    "  </a>\n" +
    "</div>\n" +
    "");
}]);
})();