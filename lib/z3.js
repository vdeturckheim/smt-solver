import { platform } from 'os';
import { join } from 'path';
import { createRequire } from 'module';

const FILE_TABLE = {
    linux: 'ubuntu-latest',
    darwin: 'macos-latest',
    win32: 'windows-latest'
};
const require = createRequire(import.meta.url);
export const { solve } = require(join('..', 'built', FILE_TABLE[platform()], 'z3.node'));
