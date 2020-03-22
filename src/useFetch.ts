import { ref, Ref } from '@vue/composition-api'

type Fetch = (...arg: any[]) => Promise<any>
type Options = {
  onBeforeFetch?: (...arg: any) => void
  onSuccess?: (res: any, ...arg: any) => void
  onError?: (err: any, ...arg: any) => void
}

export type FetchResult = {
  data: Ref<any>,
  loading: Ref<boolean>,
  fetch: (...arg: any) => any
}

export function useFetch (fetcher: Fetch, options?: Options): FetchResult {
  const data: Ref<any> = ref(null)
  const loading: Ref<boolean> = ref(false)

  const onBeforeFetch = options?.onBeforeFetch
  const onSuccess = options?.onSuccess
  const onError = options?.onError

  const fetch = (...params: any[]) => {
    if (loading.value) return

    loading.value = true

    onBeforeFetch?.(...params)

    fetcher(...params)
      .then(res => {
        data.value = res
        onSuccess?.(res, ...params)
      })
      .catch(err => onError?.(err, ...params))
      .finally(() => loading.value = false)
  }

  return {
    data,
    loading,
    fetch
  }
}