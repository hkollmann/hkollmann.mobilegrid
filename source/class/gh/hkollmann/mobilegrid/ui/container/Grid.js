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
/*
 * @require(gh.hkollmann.mobilegrid.event.type.GridEvent)
 * @asset(gh/hkollmann/mobilegrid/css/custom.css)
 */
/**
 *
 * @type Grid
 * a widget to generate a grid for mobile framework. Cell content can be any
 * mobile wigdet. Each cell can be styled by css class or css style.
 */
qx.Class.define("gh.hkollmann.mobilegrid.ui.container.Grid", {
  extend : qx.ui.mobile.core.Widget,
  construct : function() {
    this.base(arguments);
    this.__items = [];
  },
  events : {
    addCell : "gh.hkollmann.mobilegrid.event.type.GridEvent",
    addRow : "gh.hkollmann.mobilegrid.event.type.GridEvent"
  },

  properties : {
    /**
     * overridden
     */
    defaultCssClass : {
      refine : true,
      init : "grid"
    }
  },
  members : {
    /**
     * get the cell widget at row/col
     *
     * @param aRow {Array} row to fetch
     * @param aCol {Array} col to fetch
     * @return {var} widget at row/col
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
     * count of rows
     *
     * @return {var} count of rows
     */
    getRowCount : function() {
      return this.__items.length;
    },

    /**
     * count of cols
     *
     * @return {var} count of cols
     */
    getColCount : function() {
      return this.__maxcols;
    },

    /**
     * add an widget to the grid
     *
     * @param aItem {Widget} the widget to add
     * @param aLayoutProperties {Object} define properties of the widget:<br/>
     *         col    : col where widget should be inserted<br/>
     *         row    : row where widget should be inserted<br/>
     *         colspan: count of cols to span<br/>
     *         rowspan: count of rows to span<br/>
     *         class  : class for div element, default: cell<br/>
     *         style  : special style for div element
     * @return {var} the added item
     */
    add : function(aItem, aLayoutProperties) {
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
      qx.bom.element.Class.add(aItem.getContentElement(), aLayoutProperties.class || "cell");
      if (aLayoutProperties.style) {
        qx.bom.element.Style.setStyles(aItem.getContentElement(), aLayoutProperties.style);
      }
      this.__render();
      return this.__items[aLayoutProperties.row][aLayoutProperties.col];
    },

    /**
     * clears the whole grid
     * @return
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

    /**
     *  overridden
     */
    _getTagName : function() {
      return "table";
    },

    /**
     * renders the grid
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
            this.fireEvent("addRow", gh.hkollmann.mobilegrid.event.type.GridEvent, [this, tr, r, c]);
            for (c = 0; c < this.__items[r].length; c++) {
              td = qx.dom.Element.create("td");
              qx.bom.element.Class.add(td, "grid-cell");
              this.fireEvent("addCell", gh.hkollmann.mobilegrid.event.type.GridEvent, [this, td, r, c]);
              var item = this.__items[r][c];
              if (item) {
                if (item.$$layoutProperties.colspan && (item.$$layoutProperties.colspan > 1)) {
                  qx.bom.element.Attribute.set(td, "colspan", item.$$layoutProperties.colspan);
                  c += item.$$layoutProperties.colspan - 1;
                }
                if (item.$$layoutProperties.rowspan && (item.$$layoutProperties.rowspan > 1)) {
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
     * destructor
     */
    destruct : function() {
      this.clear();
    },
    __items : null,
    __maxcols : null
  }
});
