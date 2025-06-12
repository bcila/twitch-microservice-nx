import path from 'path';

// PROTO FILES
const protoBasePath = path.join(
  process.cwd(),
  'libs',
  'protos',
  'dist',
  'proto',
);

export const AUTH_PROTO_PATH = path.join(protoBasePath, 'auth.proto');
export const STREAM_PROTO_PATH = path.join(protoBasePath, 'stream.proto');
export const USER_PROTO_PATH = path.join(protoBasePath, 'user.proto');
