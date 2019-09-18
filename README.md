ember-eval-helper
==============================================================================

This addon introduce `e` (eval) helper, to allow this syntax usage in templates

```hbs
<button {{action (e "alert") "Hello" target=(e "window") }}>
  onclick = window.alert("hello")
</button>
```

```hbs
{{#let (e "{ projectName: 'Ember' }") as |project|}}
  <h2 id="title">{{project.projectName}}</h2>
{{/let}}
```

`this` scope access also supported, passing it as second argument

```js
export {
    name: "foo"
}
```

```hbs
{{e 'this.foo' this}}
```

Sugar: Angle components tagged  values will be autocompiled.

```hbs
// input
<MyComponent @name="`this.realName()`" />

// output
<MyComponent @name={{e 'this.realName()' this}}>

```

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-eval-helper
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
