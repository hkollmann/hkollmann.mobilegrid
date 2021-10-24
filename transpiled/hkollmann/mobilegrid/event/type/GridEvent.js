(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Event": {
        "require": true
      }
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
   *
   * @type GridEvent
   * special event type fired during grid creating.
   */
  qx.Class.define("hkollmann.mobilegrid.event.type.GridEvent", {
    extend: qx.event.type.Event,
    members: {
      init: function init(grid, DOMElement, row, col, canBubble) {
        hkollmann.mobilegrid.event.type.GridEvent.prototype.init.base.call(this, canBubble, false);
        this.__P_87_0 = row;
        this.__P_87_1 = col;
        this.__P_87_2 = grid;
        this.__P_87_3 = DOMElement;
        return this;
      },
      // override
      clone: function clone(embryo) {
        var clone = hkollmann.mobilegrid.event.type.GridEvent.prototype.clone.base.call(this, embryo);
        clone.__P_87_2 = this.__P_87_2;
        clone.__P_87_0 = this.__P_87_0;
        clone.__P_87_1 = this.__P_87_1;
        clone.__P_87_3 = this.__P_87_3;
        return clone;
      },
      getGrid: function getGrid() {
        return this.__P_87_2;
      },
      getDOMElement: function getDOMElement() {
        return this.__P_87_3;
      },
      getRow: function getRow() {
        return this.__P_87_0;
      },
      getCol: function getCol() {
        return this.__P_87_1;
      },
      __P_87_2: null,
      __P_87_0: null,
      __P_87_1: null,
      __P_87_3: null
    }
  });
  hkollmann.mobilegrid.event.type.GridEvent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=GridEvent.js.map?dt=1635064651254