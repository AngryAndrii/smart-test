import { User } from "../../types/users";

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  nameFilter: string;
  usernameFilter: string;
  emailFilter: string;
  phoneFilter: string;
}