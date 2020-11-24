/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */
export function get(
  obj: Record<string, any>, // TODO: fix
  path: string | number,
  fallback?: any,
  index?: number
) {
  const key = typeof path === "string" ? path.split(".") : [path];

  for (index = 0; index < key.length; index++) {
    if (!obj) {
      break;
    }

    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

type Handler = (
  obj: Readonly<object>,
  path: string | number,
  fallback?: any,
  index?: number
) => any;

export const memoize = (fn: Handler) => {
  const cache = new WeakMap();

  const memoizedFn: Handler = (
    obj: object,
    path: string | number,
    fallback?: any,
    index?: number
  ) => {
    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    const map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    const value = fn(obj, path, fallback, index);

    map.set(path, value);

    return value;
  };

  return memoizedFn;
};

export const memoizedGet = memoize(get);
