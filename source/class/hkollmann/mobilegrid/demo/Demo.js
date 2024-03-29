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
 *
 * @type Demo
 * demo class for mobile grid
 */
qx.Class.define("hkollmann.mobilegrid.demo.Demo", {
  extend: qx.ui.mobile.page.NavigationPage,
  include: [qx.locale.MTranslation],
  construct() {
    super();
    this.setTitle(this.tr("Simple Demo"));
  },
  members: {
    /**
     *
     * @overridden
     */
    _initialize() {
      super._initialize();
      var grid = new hkollmann.mobilegrid.ui.container.Grid();
      for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 5; c++) {
          var lbl = new qx.ui.mobile.basic.Label(
            this.tr("col %1, row %2", c, r)
          );
          grid.add(lbl, {
            row: r,
            col: c,
          });
        }
      }
      this.getContent().add(grid);
    },
  },
});
