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
        this.__row = row;
        this.__col = col;
        this.__grid = grid;
        this.__DOMElement = DOMElement;
        return this;
      },
      // override
      clone: function clone(embryo) {
        var clone = hkollmann.mobilegrid.event.type.GridEvent.prototype.clone.base.call(this, embryo);
        clone.__grid = this.__grid;
        clone.__row = this.__row;
        clone.__col = this.__col;
        clone.__DOMElement = this.__DOMElement;
        return clone;
      },
      getGrid: function getGrid() {
        return this.__grid;
      },
      getDOMElement: function getDOMElement() {
        return this.__DOMElement;
      },
      getRow: function getRow() {
        return this.__row;
      },
      getCol: function getCol() {
        return this.__col;
      },
      __grid: null,
      __row: null,
      __col: null,
      __DOMElement: null
    }
  });
  hkollmann.mobilegrid.event.type.GridEvent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=GridEvent.js.map?dt=1564930741289