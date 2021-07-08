'use strict';
const AdmZip = require('adm-zip');
const Path = require('path');
const OS = require('os');
const Fs = require('fs');

const FILE_TABLE = {
    linux: 'ubuntu-latest',
    darwin: 'macos-latest',
    win32: 'windows-latest'
};

const zip = new AdmZip(Path.join(__dirname, `z3-${FILE_TABLE[OS.platform()]}.zip`));
Fs.mkdirSync(Path.join(__dirname, 'z3'))
zip.extractAllTo(Path.join(__dirname, 'z3'), true);


