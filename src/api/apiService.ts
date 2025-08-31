import { ACCESS_TOKENS_CONTEXT, BASE_URL_PREFIX, REFRESH_TOKEN_PATH } from "../utils/constants";
import { getObject } from "../utils/AsyncStorage";
import { AccessTokenContext } from "./model/auth/AccessTokensContext";
import { isTokenExpired } from "../utils/jwt";
import { loginService } from "./loginService";

const BASE_URL = BASE_URL_PREFIX;

let cachedAccessTokes: AccessTokenContext | null = null;

export const initializeToken = async (p0?: string) => {
  cachedAccessTokes = await getObject(ACCESS_TOKENS_CONTEXT);
};


export const getAccessToken = async (): Promise<string | undefined> => {
       if(!cachedAccessTokes){
        await initializeToken();
       }
       return cachedAccessTokes?.accessToken;
};

const buildUrl = (endpoint: string, queryParams: Record<string, any> = {}): string => {
    const url = new URL(`${BASE_URL}${endpoint}`);

    Object.keys(queryParams).forEach(key => {
        if (queryParams[key] !== undefined && queryParams[key] !== null) {
            url.searchParams.append(key, queryParams[key]);
        }
    });

    return url.toString();
};


const apiCall = async (endpoint: string, method: string = "GET", body: any = null, queryParams: Record<string, any> = {}, retryAttempted: boolean = false): Promise<any> => {
    try {
        const url = buildUrl(endpoint, queryParams);
        console.log('Making API call to:', url);
        let accessToken = await getAccessToken();

        if(accessToken && !endpoint.includes(REFRESH_TOKEN_PATH) && isTokenExpired(accessToken)){
          const resp =  await loginService.refresh()
          accessToken = await getAccessToken();

        }

        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken || ""
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }
   
        const response = await fetch(url, options);
        const data = await response.json();
            
        if (!response.ok) {
            throw new Error(data?.message?.toString() || "Something went wrong");
        }
        return data;
    } catch (error: any) {
        throw error?.toString() || "Unknown error";
    }
};

// Export reusable functions
export const apiService = {
    get: (endpoint: string, queryParams?: Record<string, any>) => apiCall(endpoint, "GET", null, queryParams),
    post: (endpoint: string, body?: any, retry: boolean = false) => apiCall(endpoint, "POST", body),
    put: (endpoint: string, body?: any) => apiCall(endpoint, "PUT", body),
    delete: (endpoint: string, body?: any) => apiCall(endpoint, "DELETE", body)
};
