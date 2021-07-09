'use strict';
const AdmZip = require('adm-zip');
const Path = require('path');
const Fs = require('fs');

const target = process.argv.pop();
const origin = process.argv.pop();

const dir = Path.dirname(target);
Fs.mkdirSync(dir, { recursive: true });

const zip = new AdmZip(origin);
zip.extractAllTo(target, true);
