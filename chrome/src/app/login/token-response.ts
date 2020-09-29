import { User } from '../user/User';

export interface TokenResponse {
  token: string;
  user: User;
}
