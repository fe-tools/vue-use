import { createLocalVue } from '@vue/test-utils'
import VueCompositionAPI, { isRef } from '@vue/composition-api'
import { useURLQuery } from '../src/useURLQuery'

const setURLQueryString = (query: string) => window.history.pushState({}, '', query)

beforeAll(() => {
  const vue = createLocalVue()
  vue.use(VueCompositionAPI)
})

describe('useURLQuery', () => {

  test('Should be defined', () => {
    expect(useURLQuery).toBeDefined()
  })

  test('Return Ref', () => {
    expect(isRef(useURLQuery(''))).toBeTruthy()
    expect(isRef(useURLQuery([''])[0])).toBeTruthy()
  })

  test('Parse URL query strings', () => {
    setURLQueryString('?foo=unicorn&ilike=pizz&id=2333')
    
    const foo = useURLQuery('foo')
    expect(foo.value).toBe('unicorn')
    
    const [ilike, id] = useURLQuery(['ilike', 'id'])
    expect(ilike.value).toBe('pizz')
    expect(id.value).toBe('2333')
  })
})
