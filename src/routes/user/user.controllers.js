import UserService from '../../services/user/user.service';

export const signUpController = async (req, res) => {
  const {body} = req;

  await UserService.signUp(body);

  res.send('pitoooooo');
};
