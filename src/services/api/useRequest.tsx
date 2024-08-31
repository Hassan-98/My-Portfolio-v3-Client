'use client';
import { useEffect, useState } from 'react';
import { addToCache, getFromCache } from './cache';

export type FetchFilters = { [key: string]: string | number };

export default function useRequest<R>(
  requestHandler: (filters?: FetchFilters) => Promise<R>,
  filters?: FetchFilters,
  options?: {
    disabled?: boolean;
    cache?: {
      id: string;
      ttl?: number;
    },
    initialData?: R;
  }
): Response<R> {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>();
  const [data, setData] = useState<R | undefined>(options?.initialData);

  useEffect(() => {
    if (!options?.disabled && !options?.initialData) handleRequest(filters ? filters : undefined);
    else setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (options?.disabled) return {
    isLoading,
    isError,
    error,
    data,
    refetch: async (reFetchfilters?: FetchFilters) => { }
  }

  async function handleRequest(requestFilters?: FetchFilters, isRefetch?: boolean) {
    try {
      //= Get data from the cache (if exists)
      if (!isRefetch && options?.cache?.id) {
        let cachedData = getFromCache<R>(options?.cache?.id, requestFilters);
        if (cachedData) {
          setData(cachedData);
          return;
        }
      }

      //= Send the request
      const response = await requestHandler(requestFilters);
      setData(response);

      //= Add data to the cache
      if (options?.cache?.id) addToCache({
        id: options?.cache?.id,
        data: response,
        ttl: (options.cache.ttl ? options.cache.ttl : 600) * 1000,
        filters: requestFilters
      });

    } catch (err: any) {
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isError,
    error,
    data,
    refetch: (reFetchfilters?: FetchFilters) => {
      setIsLoading(true);
      return handleRequest(reFetchfilters ? reFetchfilters : filters || undefined, true);
    }
  }
}

interface Response<D> {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  data?: D;
  refetch: (reFetchfilters?: FetchFilters) => Promise<void>;
}