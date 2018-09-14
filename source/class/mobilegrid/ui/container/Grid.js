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
 * @require(mobilegrid.event.type.GridEvent)
 * @asset(mobilegrid/css/custom.css)
 *
 */
qx.Class.define("mobilegrid.ui.container.Grid", {
  extend : qx.ui.mobile.core.Widget,
  construct : function() {
    this.base(arguments);
    this.__items = [];
  },
  events : {
    addCell : "mobilegrid.event.type.GridEvent",
    addRow : "mobilegrid.event.type.GridEvent"
  },
  /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */
  properties : {
    // overridden
    defaultCssClass : {
      refine : true,
      init : "grid"
    }
  },
  /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
  members : {
    /**
     * TODOC
     *
     * @param aRow {Array} TODOC
     * @param aCol {Array} TODOC
     * @return {var} TODOC
     */
    getCell : function(aRow, aCol) {
      var res = null;
      if (this.__items) {
        if (this.__items[aRow]) {
          res = this.__items[aRow][aCol];
        }
      }
      return res;
    },
    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getRowCount : function() {
      return this.__items.length;
    },
    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getColCount : function() {
      return this.__maxcols;
    },
    /**
     * TODOC
     *
     * @param aItem {Array} TODOC
     * @param aLayoutProperties {Array} TODOC
     * @param aStyle {Array} TODOC
     * @return {var} TODOC
     * @throws TODOC
     */
    add : function(aItem, aLayoutProperties, aClass, aStyle) {
      if (aLayoutProperties === null) {
        throw new Error("No properties given");
      }
      if (aLayoutProperties.row === null) {
        throw new Error("No row given");
      }
      if (aLayoutProperties.col === null) {
        throw new Error("No col given");
      }
      if (!this.__items[aLayoutProperties.row]) {
        this.__items[aLayoutProperties.row] = [];
      }
      this.__items[aLayoutProperties.row][aLayoutProperties.col] = aItem;
      aItem.$$layoutProperties = aLayoutProperties;
      if (aClass) {
        qx.bom.element.Class.add(aItem.getContentElement(), aClass || "cell");
      }
      if (aStyle) {
        qx.bom.element.Style.setStyles(aItem.getContentElement(), aStyle);
      }
      this.__render();
      return this.__items[aLayoutProperties.row][aLayoutProperties.col];
    },
    /**
     * TODOC
     *
     */
    clear : function() {
      for (var r = 0; r < this.__items.length; r++) {
        if (this.__items[r]) {
          for (var c = 0; c < this.__items[r].length; c++) {
            this._disposeObjects(this.__items[r][c]);
          }
        }
      }
      this.__render();
    },
    // overridden
    /**
     * TODOC
     *
     * @return {string} TODOC
     */
    _getTagName : function() {
      return "table";
    },
    /**
     * TODOC
     *
     */
    __render : function() {
      this._setHtml("");
      var maxcols = 0;
      if (this.__items) {
        for (var i = 0; i < this.__items.length; i++) {
          if (this.__items[i]) {
            maxcols = (this.__items[i].length > maxcols) ? this.__items[i].length : maxcols;
          }
        }
        this.__maxcols = maxcols;
        for (var r = 0; r < this.__items.length; r++) {
          if (this.__items[r]) {
            var tr = qx.dom.Element.create("tr");
            var td;
            qx.bom.element.Class.add(tr, "grid-row");
            var c = -1;
            this.fireEvent("addRow", mobilegrid.event.type.GridEvent, [this, tr, r, c]);
            for (c = 0; c < this.__items[r].length; c++) {
              td = qx.dom.Element.create("td");
              qx.bom.element.Class.add(td, "grid-cell");
              this.fireEvent("addCell", mobilegrid.event.type.GridEvent, [this, td, r, c]);
              var item = this.__items[r][c];
              if (item) {
                if (item.$$layoutProperties.colspan) {
                  qx.bom.element.Attribute.set(td, "colspan", item.$$layoutProperties.colspan);
                  c += item.$$layoutProperties.colspan - 1;
                }
                if (item.$$layoutProperties.rowspan) {
                  qx.bom.element.Attribute.set(td, "rowspan", item.$$layoutProperties.rowspan);
                }
                var e = item.getContainerElement();
                td.appendChild(e);
              }
              tr.appendChild(td);
            }
            for (;c < maxcols; c++) {
              td = qx.dom.Element.create("td");
              tr.appendChild(td);
            }
            this.getContainerElement().appendChild(tr);
          }
        }
      }
      this._domUpdated();
    },
    /**
     * TODOC
     *
     */
    destruct : function() {
      this.clear();
    },
    __items : null,
    __maxcols : null
  }
});
