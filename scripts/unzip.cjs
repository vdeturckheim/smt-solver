console.log('I am supposed to unzip stuff')
/*
'use strict';
import * as OS from 'os';
import * as Fs from 'fs';
import * as Path from 'path';
import * as Https from 'https';
import { default as AdmZip } from 'adm-zip';


const Z3_VERSION = '4.8.10';
const FILE_TABLE = {
    linux: 'x64-ubuntu-18.04',
    darwin: 'x64-osx-10.15.7',
    win32: 'x64-win'
};

const ZIP_NAME = `z3-${Z3_VERSION}-${FILE_TABLE[OS.platform()]}.zip`
const URL = `https://github.com/Z3Prover/z3/releases/download/z3-${Z3_VERSION}/${ZIP_NAME}`;

const download = function () {
    const out = Fs.createWriteStream(Path.join(process.cwd(), ZIP_NAME));
    return new Promise((resolve) => {
        Https.get(URL, (res) => {
            res.pipe(out);
            res.on('end', () => {
                return resolve(Path.join(process.cwd(), ZIP_NAME));
            });
        });
    });
};

const zipPath = await download();
Fs.mkdirSync(Path.join(process.cwd(), 'z3'));
const zip = new AdmZip(zipPath);
zip.extractAllTo(Path.join(process.cwd(), 'z3'), /!*overwrite*!/true);


*/
