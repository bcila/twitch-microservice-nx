import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const PROTO_SRC = path.resolve(__dirname, '../../libs/protos/src/proto');
const OUT_DIR = path.resolve(__dirname, '../../libs/protos/generated');

// If the output directory does not exist, create it
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Get all .proto files recursively from the source directory
function getAllProtoFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllProtoFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith('.proto')) return [fullPath];
    return [];
  });
}

const files = getAllProtoFiles(PROTO_SRC);

files.forEach((protoFile) => {
  console.log(`🔨 Generating from: ${protoFile}`);

  execSync(
    `npx protoc \
      --plugin=protoc-gen-ts_proto=${path.resolve(
        './node_modules/.bin/protoc-gen-ts_proto'
      )} \
      --ts_proto_out=${OUT_DIR} \
      --ts_proto_opt=nestJs=true,outputServices=grpc-js \
      --proto_path=${PROTO_SRC} \
      ${protoFile}`,
    { stdio: 'inherit' }
  );
});
