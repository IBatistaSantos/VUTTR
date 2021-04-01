import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserCase } from './CreateUserUseCase';
class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserUseCase = new CreateUserCase();
    const userCreated = await createUserUseCase.execute({
      name,
      email,
      password,
    });
    return response.status(200).json(userCreated);
  }
}

export { CreateUserController };
