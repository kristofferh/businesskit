/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
export declare function get(obj: Record<string, any>, // TODO: fix
path: string | number, fallback?: any, index?: number): any;
declare type Handler = (obj: Readonly<object>, path: string | number, fallback?: any, index?: number) => any;
export declare const memoize: (fn: Handler) => Handler;
export declare const memoizedGet: Handler;
export {};
