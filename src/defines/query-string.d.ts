/**
 * query-string@5.1.1
 * 
 * Parse and stringify URL query strings
 * 
 * https://github.com/sindresorhus/query-string/tree/8b5d5ec5e0503c892e779a0063bd1a06b841677d
 * 
 */
declare module 'query-string' {
  export interface ParsedQuery < T = string > {
    [key: string]: T | T[] | null | undefined
  }
  export interface ParseOptions {
    readonly arrayFormat?: 'bracket' | 'index' | 'none'
  }
  export function parse(query: string, options ? : ParseOptions): ParsedQuery

  export interface StringifyOptions {
    readonly strict?: boolean
    readonly encode?: boolean
    readonly arrayFormat?: 'bracket' | 'index' | 'none'
    readonly sort?: ((itemLeft: string, itemRight: string) => number) | false
  }
  export function stringify(
    object: {
      [key: string]: any
    },
    options ? : StringifyOptions
  ): string

  export function extract(url: string): string


  export interface ParsedUrl {
    readonly url: string
    readonly query: ParsedQuery
  }
  export function parseUrl(url: string, options ? : ParseOptions): ParsedUrl
}
