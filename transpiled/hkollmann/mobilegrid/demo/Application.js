(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Mobile": {
        "require": true
      },
      "qx.log.appender.Native": {},
      "qx.log.appender.Console": {},
      "hkollmann.mobilegrid.demo.Demo": {},
      "qx.ui.mobile.page.Manager": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo mobile grid
     https://github.com/hkollmann/hkollmann.mobilegrid
  
     Copyright:
       2018 Henner Kollmann (Henner.Kollmann@gmx.de)
  
     License:
       MIT: https://opensource.org/licenses/MIT
  
       This software is provided under the same licensing terms as Qooxdoo,
       please see the LICENSE file in the Qooxdoo project's top-level directory
       for details.
  
     Authors:
      Henner Kollmann (Henner.Kollmann@gmx.de)
  
  ************************************************************************ */

  /**
   * @asset(hkollmann/mobilegrid/*)
   */
  qx.Class.define("hkollmann.mobilegrid.demo.Application", {
    extend: qx.application.Mobile,
    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        hkollmann.mobilegrid.demo.Application.prototype.main.base.call(this); // Enable logging in debug variant

        {
          // support native logging capabilities, e.g. Firebug for Firefox
          qx.log.appender.Native; // support additional cross-browser console.
          // Trigger a "longtap" event on the navigation bar for opening it.

          qx.log.appender.Console;
        }
        var demo = new hkollmann.mobilegrid.demo.Demo();
        var manager = new qx.ui.mobile.page.Manager(false);
        manager.addDetail([demo]);
        demo.show();
      }
    }
  });
  hkollmann.mobilegrid.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1564930732019