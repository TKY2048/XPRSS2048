import {createConnection} from 'typeorm';
import {User} from '../../db/entities/user.entity';

/**
 *
 */
export default class UserService {
  /**
   * @param user - user object
   */
  SignUp(user) : Promise<any> {
    return createConnection().then(async (connection) => {
      const newUser = new User();

      newUser.username = user.username;
      newUser.password = user.password;
      newUser.roles = user.roles;

      await connection.manager.save(newUser);
    }).catch((e) => {
      console.error(e);
    });
  }
}
