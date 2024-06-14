declare var require: any;

const version: string = require('../../package.json').version;

let env = (window as { [key: string]: any })['env'];

// Variables
export const environment = {
    appVersion: version,
    environment: env['environment']
};
