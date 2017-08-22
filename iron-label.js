import '../polymer/polymer.js';
import { Polymer as Polymer$0 } from '../polymer/lib/legacy/polymer-fn.js';
import { dom } from '../polymer/lib/legacy/polymer.dom.js';

export const IronLabel = Polymer$0({
  is: 'iron-label',

  listeners: {
    'tap': '_tapHandler'
  },

  properties: {
    /**
      * An ID reference to another element that needs to be
      * labelled by this `iron-label` element.
      */
    for: {
      type: String,
      value: '',
      reflectToAttribute: true,
      observer: '_forChanged'
    },
    /**
     * @type {Element}
     */
    _forElement: Object
  },

  attached: function() {
    this._forChanged();
  },

  ready: function() {
    this._generateLabelId();
  },

  // generate a unique id for this element
  _generateLabelId: function() {
    if (!this.id) {
      var id = 'iron-label-' + IronLabel._labelNumber++;
      dom(this).setAttribute('id', id);
    }
  },

  _findTarget: function() {
    if (this.for) {
      // external target
      var scope = dom(this).getOwnerRoot();
      return dom(scope).querySelector('#' + this.for);
    } else {
      // explicit internal target
      var el = dom(this).querySelector('[iron-label-target]');
      if (!el) {
        // implicit internal target
        el = dom(this).firstElementChild;
      }
      return el;
    }
  },

  _tapHandler: function(ev) {
    if (!this._forElement) {
      return;
    }
    var target = dom(ev).localTarget;
    if (target === this._forElement) {
      return;
    }
    this._forElement.focus();
    this._forElement.click();
  },

  _applyLabelledBy: function() {
    if (this._forElement) {
      dom(this._forElement).setAttribute('aria-labelledby', this.id);
    }
  },

  _forChanged: function() {
    if (this._forElement) {
      dom(this._forElement).removeAttribute('aria-labelledby');
    }
    this._forElement = this._findTarget();
    this._applyLabelledBy();
  }
});

// global counter for unique label ids
IronLabel._labelNumber = 0;
