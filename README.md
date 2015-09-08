# iron-label
A version of the `<label>` element that works with custom elements as well as native elements.

All text in the `iron-label` will be applied to the target element as a screen-reader accessible description.

There are two ways to use `iron-label` to target an element:

1. place an element inside iron-label with the `for` attribute:

        <iron-label>
          Context for the Button
          <paper-button for>button</paper-button>
        </iron-label>

2. Set the `for` attribute on the `iron-label` element to point to a target element in the same scope with a query
string:

        <iron-label for=".foo">
          Context for the button witht the "foo" class"
        </iron-label>
        <paper-button class="foo">Far away button</paper-button>

All taps on the `iron-label` will be forwarded to the "target" element.
