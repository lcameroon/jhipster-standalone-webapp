const path = require('path');
const fs = require('fs');
const pkg = require('./package.json');

console.log('Running pre-build tasks');

const appVersion = pkg.version || '0.0.1-dev';
const timestamp = new Date().getTime();
const buildNumber = process.env.BUILD_NUMBER || process.BUILD_NUMBER || '1';
const versionFilePath = './src/app/app.constants.ts';

const src = `// These constants are injected via 'root/prebuild.js' script
// You can add more variables in '/environments' or in profile specific environment.<dev|prod>.js files.

import { environment } from '../environments/environment';

export const VERSION = '${appVersion}';
export const DEBUG_INFO_ENABLED: boolean = !environment.production;
export const SERVER_API_URL = environment.backendUrl;
export const BUILD_TIMESTAMP = ${timestamp};
export const BUILD_NUMBER = '${buildNumber}';
`;

// ensure version module pulls value from package.json
fs.writeFile(versionFilePath, src, { flat: 'w' }, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log(`Updating application version "${appVersion}"`);
    console.log(`Updating build number "${buildNumber}"`);
    console.log(`Writing file to '${versionFilePath}'\n`);
});
