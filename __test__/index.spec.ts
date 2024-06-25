import test from 'ava'

import { plus100, fibonacci } from '../index'

test('sync function from native code', (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
})

test('fibonacci', (t) => {
  t.is(fibonacci(3), 2)
})
