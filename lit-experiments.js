import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `lit-experiments`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LitExperiments extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'lit-experiments',
      },
    };
  }
}

window.customElements.define('lit-experiments', LitExperiments);
