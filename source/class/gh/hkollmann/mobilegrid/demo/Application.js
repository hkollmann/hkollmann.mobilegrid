/* ************************************************************************

   qooxdoo mobile grid
   https://github.com/hkollmann/qx-contrib-mobileGrid

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
 * @asset(mobilegrid/*)
 */
qx.Class.define("gh.hkollmann.mobilegrid.demo.Application", {
  extend : qx.application.Mobile,
  members : {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     */
    main : function() {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console.
        // Trigger a "longtap" event on the navigation bar for opening it.
        qx.log.appender.Console;
      }

      var demo = new gh.hkollmann.mobilegrid.demo.Demo();
      var manager = new qx.ui.mobile.page.Manager(false);
      manager.addDetail([
        demo
      ]);
      demo.show();
    }
  }
});
