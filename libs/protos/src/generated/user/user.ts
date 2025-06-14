// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.2
//   protoc               v3.20.3
// source: user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface FindUserByIdRequest {
  id: string;
}

export interface FindUserByUsernameRequest {
  username: string;
}

export interface FindUserByEmailRequest {
  email: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  success: boolean;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
}

export const USER_PACKAGE_NAME = "user";

function createBaseFindUserByIdRequest(): FindUserByIdRequest {
  return { id: "" };
}

export const FindUserByIdRequest: MessageFns<FindUserByIdRequest> = {
  encode(message: FindUserByIdRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindUserByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindUserByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseFindUserByUsernameRequest(): FindUserByUsernameRequest {
  return { username: "" };
}

export const FindUserByUsernameRequest: MessageFns<FindUserByUsernameRequest> = {
  encode(message: FindUserByUsernameRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindUserByUsernameRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindUserByUsernameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseFindUserByEmailRequest(): FindUserByEmailRequest {
  return { email: "" };
}

export const FindUserByEmailRequest: MessageFns<FindUserByEmailRequest> = {
  encode(message: FindUserByEmailRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindUserByEmailRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindUserByEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { username: "", email: "", password: "" };
}

export const CreateUserRequest: MessageFns<CreateUserRequest> = {
  encode(message: CreateUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { id: "" };
}

export const DeleteUserRequest: MessageFns<DeleteUserRequest> = {
  encode(message: DeleteUserRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return { success: false };
}

export const DeleteUserResponse: MessageFns<DeleteUserResponse> = {
  encode(message: DeleteUserResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseUserResponse(): UserResponse {
  return { id: "", username: "", email: "" };
}

export const UserResponse: MessageFns<UserResponse> = {
  encode(message: UserResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface UserServiceClient {
  findUserById(request: FindUserByIdRequest): Observable<UserResponse>;

  findUserByUsername(request: FindUserByUsernameRequest): Observable<UserResponse>;

  findUserByEmail(request: FindUserByEmailRequest): Observable<UserResponse>;

  createUser(request: CreateUserRequest): Observable<UserResponse>;

  deleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;
}

export interface UserServiceController {
  findUserById(request: FindUserByIdRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  findUserByUsername(
    request: FindUserByUsernameRequest,
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  findUserByEmail(request: FindUserByEmailRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  createUser(request: CreateUserRequest): Promise<UserResponse> | Observable<UserResponse> | UserResponse;

  deleteUser(
    request: DeleteUserRequest,
  ): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findUserById", "findUserByUsername", "findUserByEmail", "createUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";

export type UserServiceService = typeof UserServiceService;
export const UserServiceService = {
  findUserById: {
    path: "/user.UserService/FindUserById",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindUserByIdRequest) => Buffer.from(FindUserByIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindUserByIdRequest.decode(value),
    responseSerialize: (value: UserResponse) => Buffer.from(UserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserResponse.decode(value),
  },
  findUserByUsername: {
    path: "/user.UserService/FindUserByUsername",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindUserByUsernameRequest) =>
      Buffer.from(FindUserByUsernameRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindUserByUsernameRequest.decode(value),
    responseSerialize: (value: UserResponse) => Buffer.from(UserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserResponse.decode(value),
  },
  findUserByEmail: {
    path: "/user.UserService/FindUserByEmail",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindUserByEmailRequest) => Buffer.from(FindUserByEmailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindUserByEmailRequest.decode(value),
    responseSerialize: (value: UserResponse) => Buffer.from(UserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserResponse.decode(value),
  },
  createUser: {
    path: "/user.UserService/CreateUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateUserRequest) => Buffer.from(CreateUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateUserRequest.decode(value),
    responseSerialize: (value: UserResponse) => Buffer.from(UserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UserResponse.decode(value),
  },
  deleteUser: {
    path: "/user.UserService/DeleteUser",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteUserRequest) => Buffer.from(DeleteUserRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteUserRequest.decode(value),
    responseSerialize: (value: DeleteUserResponse) => Buffer.from(DeleteUserResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteUserResponse.decode(value),
  },
} as const;

export interface UserServiceServer extends UntypedServiceImplementation {
  findUserById: handleUnaryCall<FindUserByIdRequest, UserResponse>;
  findUserByUsername: handleUnaryCall<FindUserByUsernameRequest, UserResponse>;
  findUserByEmail: handleUnaryCall<FindUserByEmailRequest, UserResponse>;
  createUser: handleUnaryCall<CreateUserRequest, UserResponse>;
  deleteUser: handleUnaryCall<DeleteUserRequest, DeleteUserResponse>;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
