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
 *
 * @type GridEvent
 * special event type fired during grid creating.
 */
qx.Class.define("contrib.hkollmann.mobilegrid.event.type.GridEvent", {
  extend : qx.event.type.Event,
  members : {
    init : function(grid, DOMElement, row, col, canBubble) {
      this.base(arguments, canBubble, false);
      this.__row = row;
      this.__col = col;
      this.__grid = grid;
      this.__DOMElement = DOMElement;
      return this;
    },
    // override
    clone : function(embryo) {
      var clone = this.base(arguments, embryo);
      clone.__grid = this.__grid;
      clone.__row = this.__row;
      clone.__col = this.__col;
      clone.__DOMElement = this.__DOMElement;
      return clone;
    },
    getGrid : function() {
      return this.__grid;
    },
    getDOMElement : function() {
      return this.__DOMElement;
    },
    getRow : function() {
      return this.__row;
    },
    getCol : function() {
      return this.__col;
    },
    __grid : null,
    __row : null,
    __col : null,
    __DOMElement : null
  }
});
