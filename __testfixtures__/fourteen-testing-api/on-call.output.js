import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


describe('GravatarImageComponent', function() {
  setupRenderingTest();

  beforeEach(async function() {
    this.set('bar', function() {});

    this.set('foo', function() {});

    await render(hbs`{{gravatar-image foo=(action bar)}}`);
  });

  it('renders', async function() {
    expect(this.$('img')).to.exist;
    await render(hbs`{{gravatar-image foo=(action foo)}}`);
  });
});
