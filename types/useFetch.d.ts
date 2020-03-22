import { Ref } from '@vue/composition-api';
declare type Fetch = (...arg: any[]) => Promise<any>;
declare type Options = {
    onBeforeFetch?: (...arg: any) => void;
    onSuccess?: (res: any, ...arg: any) => void;
    onError?: (err: any, ...arg: any) => void;
};
export declare type FetchResult = {
    data: Ref<any>;
    loading: Ref<boolean>;
    fetch: (...arg: any) => any;
};
export declare function useFetch(fetcher: Fetch, options?: Options): FetchResult;
export {};
