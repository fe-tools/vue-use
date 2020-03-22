const UA = navigator.userAgent
const isWX = () => UA.toLowerCase().indexOf('micromessenger') > -1
const isApp = () => {}
const isIOS = () => !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const isAndroid = () => UA.indexOf('Android') > -1 || UA.indexOf('Adr') > -1

type EnvResult = {
  env: 'wx' | 'app' | 'other'
  os: 'ios' | 'android' | 'unknown'
}

export default function useEnvironment (): EnvResult {
  return {
    env: 'other',
    os: 'unknown'
  }
}
