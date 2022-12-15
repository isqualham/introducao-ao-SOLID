import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("Mensagem do erro");
    }

    const userAdmin = this.usersRepository.turnAdmin(userExists);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
