export interface NewUser {
  username: string;
  password: string;
  firstName: string;
  surname: string;
  roles: Array<string>;
}