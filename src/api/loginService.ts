import { ACCESS_TOKENS_CONTEXT } from '../utils/constants';
import { getObject, setObject } from '../utils/AsyncStorage';
import { AccessTokenContext } from './model/auth/AccessTokensContext';

export const loginService = {
  async refresh(): Promise<AccessTokenContext> {
    try {
      const tokens = await getObject(ACCESS_TOKENS_CONTEXT);
      
      const response = await fetch(`${process.env.API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': tokens?.refreshToken
        }
      });

      const data = await response.json();
      
      if (response.ok) {
        await setObject(ACCESS_TOKENS_CONTEXT, data);
        return data;
      }
      
      throw new Error('Token refresh failed');
    } catch (error) {
      throw error;
    }
  }
};