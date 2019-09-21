import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { e } from 'ember-eval-helper/helpers/e';

module('Integration | Helper | e', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');
    await render(hbs`{{e inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

  test('it support basic object notation', function(assert) {
    assert.deepEqual(e(["{ projectName: 'Ember' }"]), { projectName: 'Ember'});
  });

  test('it support basic array notation', function(assert) {
    assert.deepEqual(e(["[1,2,3]"]), [1,2,3]);
  });

  test('it support basic context binding', function(assert) {
    assert.deepEqual(e(["[1,this.name,3]", { name: 2}]), [1,2,3]);
  });

  test('it support template literals', function(assert) {
    assert.deepEqual(e(["`[1,this.name,3]`", { name: 2}]), [1,2,3]);
  });

  test('it support function calls', function(assert) {
    assert.deepEqual(e(["`[1,this.name(),3]`", { name() { return 2 } }]), [1,2,3]);
  });
});
