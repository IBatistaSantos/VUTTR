import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { ICreateUser } from '../dtos/ICreateUserDTO';
import { User } from '../schema/User';
import { IUserRepositoy } from '../repositories/IUserRepository';

@injectable()
class CreateUserCase {
  constructor(
    @inject('UserRepository')
    private userRepositoy: IUserRepositoy
  ) {}

  async execute({ name, email, password }: ICreateUser): Promise<User> {
    const userAlreadyExists = await this.userRepositoy.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }
    const user = await this.userRepositoy.create({ name, email, password });
    return user;
  }
}

export { CreateUserCase };
