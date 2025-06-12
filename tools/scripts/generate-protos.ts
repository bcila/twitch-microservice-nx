import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = path.resolve(__dirname, '../..'); // workspace root directory
const PLUGIN_PATH = path.join(ROOT_DIR, 'node_modules', '.bin', 'protoc-gen-ts_proto');

const PROTO_SRC = path.join(ROOT_DIR, 'libs','protos','src','proto');
const OUT_DIR = path.resolve(ROOT_DIR, 'libs','protos','src','generated');

// If the output directory does not exist, create it
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// Get
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

  const protoName = path.basename(protoFile, '.proto');
  const outDir = path.join(OUT_DIR, protoName);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log(`🔨 Generating from: ${protoName}.proto`);

  execSync(
    `npx protoc \
      --plugin=protoc-gen-ts_proto=${PLUGIN_PATH} \
      --ts_proto_out=${outDir} \
      --ts_proto_opt=nestJs=true,outputServices=grpc-js,esModuleInterop=true \
      --proto_path=${PROTO_SRC} \
      ${protoFile}`,
    { stdio: 'inherit' }
  );

  const indexPath = path.join(outDir, 'index.ts');
  const exportContent = `export * from './${protoName}';\n`;

  fs.writeFileSync(indexPath, exportContent);
});

console.log('✅ Protobuf files generated successfully!');
