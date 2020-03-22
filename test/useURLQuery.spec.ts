import { createLocalVue } from '@vue/test-utils'
import VueCompositionAPI, { isRef } from '@vue/composition-api'

import { useURLQuery, cache } from '../src/useURLQuery'

const vue = createLocalVue()
vue.use(VueCompositionAPI)

describe('useURLQuery', () => {
  test('should be defined', () => {
    expect(useURLQuery).toBeDefined()
  })

  test('should be return Ref type', () => {
    expect(isRef(useURLQuery(''))).toBeTruthy()
  })

  test('name value should be equal to "Bob"', () => {
    const name = useURLQuery('name', 'https://foo.com/?name=Bob')
    expect(name.value).toBe('Bob')
  })

  test('name value should be equal to "John"', () => {
    const name = useURLQuery('name', 'https://foo.com/?name=Bob&name=John')
    expect(name.value).toBe('John')
  })

  test('should be return an array when query an array', () => {
    const [name, id] = useURLQuery(['name', 'id'], 'https://foo.com/?name=Bob&id=1')
    expect(name.value).toBe('Bob')
    expect(id.value).toBe('1')
  })

  test('throw error when query a invalid URL', () => {
    expect(() => useURLQuery('name', '//foo/?name=Bob')).toThrowError()
  })

  test('result should be cached', () => {
    useURLQuery('name', 'https://foo.com/?name=Bob')
    expect(JSON.stringify(cache['https://foo.com/?name=Bob'])).toBe(JSON.stringify({ name: 'Bob' }))
  })
})
