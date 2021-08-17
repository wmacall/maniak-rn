export interface User {
  token: null | string;
  username: string;
}

export interface UserState {
  user: User;
  isLoading?: boolean;
  error?: string;
}
