import { Ref } from '@vue/composition-api';
import { ParseOptions } from 'query-string';
declare type QueryResult<T = string> = Ref<T> | Ref<T[]> | Ref<''>;
export declare function useURLQuery(query: string, config?: ParseOptions): QueryResult;
export declare function useURLQuery(query: string[], config?: ParseOptions): QueryResult[];
export {};
