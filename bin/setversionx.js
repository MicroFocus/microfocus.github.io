#!/usr/bin/env node

const { argv, env, exit } = require('process');
const { existsSync } = require('fs-extra');
const { getPomVersion, getVersionForCI, getVersionForRelease, setManifestVersion } = require('../lib/version');

(async () => {

    // extract the version from the environment variable or pom.xml
    let version;
    if (env.VERSION) {
        // Get the version number with invalid characters removed.
        // Not using the VERSION_PRERELEASE for CI builds in order to simplify installing dependencies.
        version = getVersionForCI(env.VERSION);
    } else {
        // Used in dev environment only to roll over the version after release
        version = getVersionForRelease(await getPomVersion('pom.xml'));
    }

    console.log(version);

    // if there is no version specified then throw an error
    if (!version) {
        throw new Error('Version has not been specified!');
    }

    // update the versions in all locations provided on the command line
    argv.slice(2).forEach(arg => {
        if (existsSync(arg)) {
            setManifestVersion(arg, version);
        }
    });

    exit();

})().catch(err => console.error(err, err.stack));
