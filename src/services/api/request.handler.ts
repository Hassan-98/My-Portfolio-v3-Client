import { AxiosRequestConfig } from 'axios';
//= Axios Util
import axios from '@/utils/axios';
//= Toasts
import { toaster } from '@/utils/toaster';

interface Options {
  config?: AxiosRequestConfig;
  body?: any;
}

interface Response<T> {
  success: boolean;
  message?: string;
  data?: T;
}

class API {
  public BASE_URL: string;

  constructor(baseUrl: string) {
    this.BASE_URL = baseUrl;
  }

  public async GET<T>(endpoint: string, options?: Options): Promise<T | undefined> {
    const config = options?.config || {};
    try {
      const response = await axios.get<Response<T>>(`${this.BASE_URL}${endpoint}`, config);

      if (!response?.data?.success) throw new Error("An Unexpected Error Occured");

      const data: T = response.data.data as T;

      return data;
    } catch (err: any) {
      toaster.error(err?.response?.data?.message || err.message);
    }
  }

  public async POST<T>(endpoint: string, options: Options): Promise<T | undefined | null> {
    const config = options?.config || {};
    const body = options?.body || {};

    try {
      const response = await axios.post<Response<T>>(`${this.BASE_URL}${endpoint}`, body, config);

      if (!response?.data?.success) throw new Error("An Unexpected Error Occured");

      const data: T | null = response.data.data || null;

      return data;
    } catch (err: any) {
      toaster.error(err?.response?.data?.message || err.message);
    }
  }

  public async PATCH<T>(endpoint: string, options: Options): Promise<T | undefined> {
    const config = options?.config || {};
    const body = options?.body || {};

    try {
      const response = await axios.patch<Response<T>>(`${this.BASE_URL}${endpoint}`, body, config);

      if (!response?.data?.success) throw new Error("An Unexpected Error Occured");

      const data: T = response.data.data as T;

      return data;
    } catch (err: any) {
      toaster.error(err?.response?.data?.message || err.message);
    }
  }

  public async DELETE<T>(endpoint: string, options?: Options): Promise<T | undefined> {
    const config = options?.config || {};
    const body = options?.body || {};

    try {
      const response = await axios.delete<Response<T>>(`${this.BASE_URL}${endpoint}`, { ...config, data: body });

      if (!response?.data?.success) throw new Error("An Unexpected Error Occured");

      return response.data.success as T;
    } catch (err: any) {
      toaster.error(err?.response?.data?.message || err.message);
    }
  }
}

const api = new API(process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:9999`);

export default api;