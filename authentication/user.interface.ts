export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  surname: string;
  roles: Array<string>;
}