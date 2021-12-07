import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    return user;
    // Complete aqui
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
    // Complete aqui
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    return user;
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, { admin: true, updated_at: new Date() });
    const indexreceivedUser = this.users.indexOf(receivedUser);
    this.users[indexreceivedUser] = receivedUser;
    return receivedUser;
    // Complete aqui
  }

  list(): User[] {
    return this.users;
    // Complete aqui
  }
}

export { UsersRepository };
