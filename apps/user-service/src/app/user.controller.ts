import { Controller } from '@nestjs/common';
import {
  CreateUserRequest,
  DeleteUserRequest,
  DeleteUserResponse,
  FindUserByEmailRequest,
  FindUserByIdRequest,
  FindUserByUsernameRequest,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
} from '@twitch-monorepo-nx/protos/generated/user/user';
import { Observable } from 'rxjs';

@Controller('user')
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  findUserById(
    request: FindUserByIdRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    console.log('findUserById called with request:', request);

    return {
      id: request.id,
      username: 'testuser',
      email: 'test@email.com',
    };
  }
  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    throw new Error('Method not implemented.');
  }
  findUserByEmail(
    request: FindUserByEmailRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    throw new Error('Method not implemented.');
  }
  createUser(
    request: CreateUserRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    throw new Error('Method not implemented.');
  }
  deleteUser(
    request: DeleteUserRequest,
  ):
    | Promise<DeleteUserResponse>
    | Observable<DeleteUserResponse>
    | DeleteUserResponse {
    throw new Error('Method not implemented.');
  }
}
