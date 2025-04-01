declare var require: any;

const version: string = require('../../package.json').version;

let env = (window as { [key: string]: any })['env'];

// Variables
export const appEnvironment = {
    appVersion: version,
    environment: env['environment']
};
