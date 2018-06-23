import * as passport from 'koa-passport';
import { BasicStrategy } from 'passport-http';

export const setupAuthentication = () => {
  passport.use(
    new BasicStrategy(
      (username: string, password: string, callback: Function) => {
        const validUser = users.filter(
          (user: User) => user.username === username
        )[0];

        if (!validUser) {
          return callback(null, false, { message: `User doesn't exist` });
        }

        if (validUser.password !== password) {
          return callback(null, false, { message: `Password invalid` });
        }

        return callback(null, validUser);
      }
    )
  );
};

const users: Array<User> = [
  {
    id: 1,
    username: 'darryl',
    password: 'test'
  },
  {
    id: 2,
    username: 'candice',
    password: 'test'
  }
];

interface User {
  id: number;
  username: string;
  password: string;
}
