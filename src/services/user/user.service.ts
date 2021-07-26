import {createConnection} from 'typeorm';
import {User} from '../../db/entities/user.entity';

/**
 *
 */
class UserService {
  /**
   * @param user - user object
   */
  signUp(user) {
    createConnection().then(async (connection) => {
      await connection.synchronize();

      const repository = connection.getRepository(User);

      const newUser = new User();

      newUser.username = user.username;
      newUser.password = user.password;
      newUser.roles = 'tenant';

      await repository.save(newUser);
    }).catch((e) => {
      console.error(e);
    });
  }
}

export default new UserService();
