import { container } from 'tsyringe';
import { UserRepositoy } from '../../modules/account/repositories/implementations/UserRepositoy';
import { IUserRepositoy } from '../../modules/account/repositories/IUserRepository';

container.registerSingleton<IUserRepositoy>(
  'UserRepository',
  UserRepositoy
);
