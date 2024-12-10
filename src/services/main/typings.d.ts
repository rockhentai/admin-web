// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string | undefined;
    en_name?: string | undefined;
    avatar_url?: string | undefined;
    avatar_thumb?: string | undefined;
    avatar_middle?: string | undefined;
    avatar_big?: string | undefined;
    open_id?: string | undefined;
    union_id?: string | undefined;
    email?: string | undefined;
    enterprise_email?: string | undefined;
    user_id?: string | undefined;
    mobile?: string | undefined;
    tenant_key?: string | undefined;
    employee_no?: string | undefined;
  };

  type CommonResponse<T = undefined> = {
    code: number;
    message: string;
    data: T;
  };

  type UserAccessTokenData = {
    access_token?: string | undefined;
    token_type?: string | undefined;
    expires_in?: number | undefined;
    name?: string | undefined;
    en_name?: string | undefined;
    avatar_url?: string | undefined;
    avatar_thumb?: string | undefined;
    avatar_middle?: string | undefined;
    avatar_big?: string | undefined;
    open_id?: string | undefined;
    union_id?: string | undefined;
    email?: string | undefined;
    enterprise_email?: string | undefined;
    user_id?: string | undefined;
    mobile?: string | undefined;
    tenant_key?: string | undefined;
    refresh_expires_in?: number | undefined;
    refresh_token?: string | undefined;
    sid?: string | undefined;
  }

  type Code2TokenResponse = CommonResponse<UserAccessTokenData>;
}
