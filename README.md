ember-eval-helper
==============================================================================

This addon introduce `e` (eval) helper, to allow this syntax usage in templates:

```hbs
<button {{action (e "alert") "Hello" target=(e "window") }}>
  onclick = window.alert("hello")
</button>
```

```hbs
{{#let (e "{ projectName: 'Ember' }") as |project|}}
  <h2 id="title">{{project.projectName}}</h2>
{{/let}}


{{#each (e "[1,2,3,4]") as |item|}}
    Number: {{item}}
{{/each}}
```

`this` scope access also supported, passing it as second argument

```js
export {
    name: "foo"
}
```

```hbs
{{e 'this.name' this}}
```

Manual scope creation:

```hbs
<MyComponent
  @params={{
    e "this.onClick(this.foo, this.bar)" 
      (hash
        onClick=(e "this.onClick.bind(this)" this)
        foo=@foo
        bar=(array 1 2 3)
      )
  }}
/>

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


```
helper e(evalString = '', context = null)
```

```hbs
  <Component @attr="`someTextToEval`" />
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
