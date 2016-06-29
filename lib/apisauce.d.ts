
export interface axiosConfig {
  url: string;
  method: string;
  baseURL: string;
  transformRequest: (data: any) => any;
  transformResponse: (data: any) => any;
  headers: any;
  params: any;
  paramSerializer: (params: any) => string;
  data: any;
  timeout: number;
  withCredentials: boolean;
  adapter: (resolve: any, reject: any, config: any) => any;
  auth: {
    username: string,
    password: string
  };
  responseType: string;
  xsrfCookieName: string;
  xsrfHeadername: string;
  progress: (progressEvent: any) => any;
  maxContentLength: number;
  validateStatus: (status: any) => boolean;
  maxRedirects: number;
}

export interface axiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

export interface api {
  get: (url: string, params: any, options: axiosConfig) => any;
  delete: (url: string, params: any, options: axiosConfig) => any;
  head: (url: string, params: any, options: axiosConfig) => any;
  post: (url: string, params: any, options: axiosConfig) => any;
  call: (url: string, params: any, options: axiosConfig) => any;
  put: (url: string, params: any, options: axiosConfig) => any;
  patch: (url: string, params: any, options: axiosConfig) => any;
}

declare const NONE: string;
declare const CLIENT_ERROR: string;
declare const SERVER_ERROR: string;
declare const TIMEOUT_ERROR: string;
declare const CONNECTION_ERROR: string;
declare const NETWORK_ERROR: string;
declare const UNKNOWN_ERROR: string;
declare const responseToProblem: (response: axiosResponse) => string;
declare const create: (config: axiosConfig) => api;

export {
  responseToProblem,
  create,
  NONE,
  CLIENT_ERROR,
  SERVER_ERROR,
  TIMEOUT_ERROR,
  CONNECTION_ERROR,
  NETWORK_ERROR,
  UNKNOWN_ERROR,
}
