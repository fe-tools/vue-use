import { ref, Ref } from '@vue/composition-api'
import { parse, ParseOptions } from 'query-string'

type QueryResult<T = string> = Ref<T> | Ref<T[]> | Ref<''>

export function useURLQuery (query: string, config?: ParseOptions): QueryResult
export function useURLQuery (query: string[], config?: ParseOptions): QueryResult[]
export function useURLQuery (query: any, config?: ParseOptions): any {
  const url:Location = window.location

  const result = parse(url.search, {
    arrayFormat: 'index',
    ...config
  })

  if (Array.isArray(query)) {
    return query.map(key => ref(result[key] ?? ''))
  } else {
    return ref(result[query] ?? '')
  }
}
