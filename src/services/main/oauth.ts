import { request } from '@umijs/max';
import { redirectToLarkOauth } from '@/requestErrorConfig';

export async function currentUser() {
  return request<{
    data: API.CurrentUser;
  }>('/api/userinfo', {
    method: 'GET',
  });
}

export async function code2Token(code: string) {
  return request<API.Code2TokenResponse>('/oauth/code2token', {
    method: 'POST',
    data: {
      code,
    },
  });
}

export async function logout() {
  localStorage.removeItem('token');
  redirectToLarkOauth();
  // todo: request refresh token
}
