export type FormFields = {
  username: string;
  password: string;
};

export type TokenDto = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};
