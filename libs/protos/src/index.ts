import path from 'path';

export * from './lib/protos.module';

export * as AUTH from './generated/auth';
export * as STREAM from './generated/stream';
export * as USER from './generated/user';

// PROTO FILES
const protoBasePath = path.join(__dirname, 'proto');

export const AUTH_PROTO_PATH = path.join(protoBasePath, 'auth.proto');
export const STREAM_PROTO_PATH = path.join(protoBasePath, 'stream.proto');
export const USER_PROTO_PATH = path.join(protoBasePath, 'user.proto');
