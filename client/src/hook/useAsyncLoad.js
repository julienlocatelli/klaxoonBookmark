import { useCallback, useEffect, useState } from 'react';

/**
 * @param {function(): Promise<*>} callback
 * @param {*[]} [deps]
 * @returns {{isLoading: boolean, result: Object, error: *}}
 */
const useAsyncLoad = (callback, deps = []) => {
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const memoizedCallback = useCallback(callback, deps);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const callbackResult = await memoizedCallback();
        if (isMounted) setResult(callbackResult);
      } catch (e) {
        if (isMounted) setError(e);
      }
      if (isMounted) setIsLoading(false);
    })();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, deps.concat([memoizedCallback]));

  return { isLoading, result, error };
};

export default useAsyncLoad;
