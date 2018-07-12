
[![Published on NPM](https://img.shields.io/npm/v/@polymer/iron-label.svg)](https://www.npmjs.com/package/@polymer/iron-label)
[![Build status](https://travis-ci.org/PolymerElements/iron-label.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-label)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/iron-label)

## &lt;iron-label&gt;
`<iron-label>` provides a version of the `<label>` element that works with Custom Elements as well as native elements. All text in the `iron-label` will be applied to the target element as a screen-reader accessible description.

See: [Documentation](https://www.webcomponents.org/element/@polymer/iron-label),
  [Demo](https://www.webcomponents.org/element/@polymer/iron-label/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/iron-label
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/iron-label/iron-label.js';
      import '@polymer/paper-button/paper-button.js';
    </script>
  </head>
  <body>
    <iron-label>Label for a button
      <paper-button>button</paper-button>
    </iron-label>

    <iron-label for="foo">Label for the foo button</iron-label>
    <paper-button id="foo">Another button</paper-button>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-label/iron-label.js';
import '@polymer/paper-button/paper-button.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <iron-label>Label for a button
        <paper-button>button</paper-button>
      </iron-label>

      <iron-label for="foo">Label for the foo button</iron-label>
      <paper-button id="foo">Another button</paper-button>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/iron-label
cd iron-label
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
