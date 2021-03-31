import { ICreateUser } from '../../dtos/ICreateUserDTO';
import { User } from '../../schema/User';
import { IUserRepositoy } from '../IUserRepository';

class UserRepositoy implements IUserRepositoy {
  users: User[] = [];
  public async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = new User();

    Object.assign(user, { name, email, password });

    this.users.push(user);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email == email);
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id == id);
    return user;
  }
}

export { UserRepositoy };
