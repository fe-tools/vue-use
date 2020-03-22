declare type EnvResult = {
    env: 'wx' | 'app' | 'other';
    os: 'ios' | 'android' | 'unknown';
};
export default function useEnvironment(): EnvResult;
export {};
