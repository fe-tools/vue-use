import { ref, Ref } from '@vue/composition-api'

type Url = URL | Location
type Query = { [params: string]: string }
type Cache = { [url: string]: Query }

export const cache: Cache = {}

function getURLParams (url: Url): Query {
  const urlString = url.toString()

  if (cache[urlString] !== undefined) {
    return cache[urlString]
  }

  const query: Query = {}
  const search = url.search
  const args = decodeURIComponent(search).slice(1).split('&')
  args.forEach(item => {
    const a = item.split('=')
    query[a[0]] = a[1]
  })
  cache[urlString] = query

  return query
}

export function useURLQuery (key: string, urlString?: string): Ref<string>
export function useURLQuery (arg: string[], urlString?: string): Ref<string>[]
export function useURLQuery (params: any, urlString?: string) {
  let url: Url = window.location

  if (urlString !== undefined) {
    try {
      url = new URL(urlString)
    } catch(err) {
      throw `useURLQuery Error: Invalid URL '${ urlString }'`
    }
  }

  const query = getURLParams(url)

  if (Array.isArray(params)) {
    return params.map(item => ref(query[item] ?? ''))
  } else {
    return ref(query[params] ?? '')
  }
}
