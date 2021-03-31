import { ICreateUser } from '../dtos/ICreateUserDTO';
import { User } from '../schema/User';

interface IUserRepositoy {
  create({ name, email, password }: ICreateUser): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUserRepositoy };
