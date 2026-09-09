import { test } from 'node:test'
import assert from 'node:assert/strict'
import { resolveCheckoutConfig, DEVELOPMENT_PROJECT, PRODUCTION_PROJECT } from '../src/checkout-config.js'

test('public builds start closed and cannot point to development', () => {
  const config = resolveCheckoutConfig()
  assert.equal(config.enabled, false)
  assert.match(config.baseUrl, new RegExp(PRODUCTION_PROJECT))
  assert.throws(() => resolveCheckoutConfig({ projectRef: DEVELOPMENT_PROJECT, enabled: 'true' }))
  assert.throws(() => resolveCheckoutConfig({ projectRef: 'untrusted' }))
  assert.equal(resolveCheckoutConfig({ enabled: 'true' }).enabled, true)
  assert.equal(resolveCheckoutConfig({ enabled: 'TRUE' }).enabled, false)
})

test('local development retains its explicit development endpoint', () => {
  const config = resolveCheckoutConfig({ development: true })
  assert.equal(config.enabled, true)
  assert.match(config.baseUrl, new RegExp(DEVELOPMENT_PROJECT))
})
