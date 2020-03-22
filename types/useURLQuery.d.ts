import { Ref } from '@vue/composition-api';
declare type Query = {
    [params: string]: string;
};
declare type Cache = {
    [url: string]: Query;
};
export declare const cache: Cache;
export declare function useURLQuery(key: string, urlString?: string): Ref<string>;
export declare function useURLQuery(arg: string[], urlString?: string): Ref<string>[];
export {};
