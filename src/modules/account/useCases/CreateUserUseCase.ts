import { AppError } from '../../../shared/errors/AppError';
import { ICreateUser } from '../dtos/ICreateUserDTO';
import User, { UserDocument } from '../schema/User';

class CreateUserCase {
  constructor() {}

  async execute({ name, email, password }: ICreateUser): Promise<UserDocument> {
    const userAlreadyExists = await User.findOne({ email: email }).lean();

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const user = await User.create({ name, email, password });
    return user;
  }
}

export { CreateUserCase };
