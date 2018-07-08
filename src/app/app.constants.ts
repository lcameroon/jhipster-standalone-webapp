// These constants are injected via 'root/prebuild.js' script
// You can add more variables in '/environments' or in profile specific environment.<dev|prod>.js files.

import { environment } from '../environments/environment';

export const VERSION = '0.0.0';
export const DEBUG_INFO_ENABLED: boolean = !environment.production;
export const SERVER_API_URL = environment.backendUrl;
export const BUILD_TIMESTAMP = 1531033401949;
export const BUILD_NUMBER = '1';
