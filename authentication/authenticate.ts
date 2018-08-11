import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { dbInstance } from '../storage/DbConnection';
import { User } from './user.interface';

passport.serializeUser((user: User, callback) => {
  callback(null, user._id);
});

passport.deserializeUser((id: string, callback) => {
  dbInstance.getUsersCollection().findOne({ _id: id }, callback);
});

export const setupAuthentication = () => {
  passport.use(
    new LocalStrategy(
      async (username: string, password: string, callback: Function) => {
        const validUser: User = await dbInstance.getUsersCollection().findOne({ username: username });

        if (!validUser) {
          return callback(null, false, {
            success: false,
            message: `User doesn't exist`
          });
        }

        if (validUser.password !== password) {
          return callback(null, false, {
            success: false,
            message: `Password invalid`
          });
        }
        return callback(null, validUser, { success: true, roles: validUser.roles });

        dbInstance.getUsersCollection().findOne({ username: username }, (error, validUser: User) => {
          console.log(`USER:`);
          console.dir(validUser);
          if (error) {
            console.log(error);
            return callback(null, false, {
              success: false,
              message: `User doesn't exist`
            });
          }

          if (validUser.password !== password) {
            return callback(null, false, {
              success: false,
              message: `Password invalid`
            });
          }

          console.log('calling return callback...')
          return callback(null, validUser, { success: true, roles: validUser.roles });
        });
      }
    )
  );
};

const users: Array<User> = [
  {
    _id: '1',
    username: 'darryl',
    password: 'test',
    firstName: 'Darryl',
    surname: 'Daniel',
    roles: ['admin']
  },
  {
    _id: '2',
    username: 'candice',
    password: 'test',
    firstName: 'Candice',
    surname: 'Daniel',
    roles: ['customer']
  }
];
