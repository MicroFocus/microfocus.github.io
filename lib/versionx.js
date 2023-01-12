const { readFile, readFileSync, writeFileSync } = require('fs');
const { major, minor, patch } = require('semver');
const xml2js = require('xml2js');

function getManifestVersion(path) {
    // read file contents
    const content = readFileSync(path, 'utf8');

    // convert to a json structure
    const manifest = JSON.parse(content);

    return manifest.version;
}

function setManifestVersion(path, version) {
    // read file contents
    const content = readFileSync(path, 'utf8');

    // convert to a json structure
    const manifest = JSON.parse(content);

    // alter the version property
    manifest.version = version;

    // save the file
    writeFileSync(path, JSON.stringify(manifest, null, 2));
}

async function getPomVersion(path) {

    const parser = new xml2js.Parser();

    const promise = new Promise(function(resolve) {
        readFile(path, 'utf8', function(err, data) {
            parser.parseString(data, function(err, result) {
                const pomVersion = result['project']['version'][0];
                resolve(pomVersion);
            });
        });
    });

    return promise;
}

/**
 * Get the NPM version number suitable for a CI release.
 * @param {string} version The SEPG version.
 */
function getVersionForCI(version) {

    // Strip out underscores
    return getNormalizedVersion(version);
}

/**
 * Get the NPM release version number from the SEPG version and optionally an explicit prerelease identifier.
 * @param {string} version The SEPG version, in the form `1.2.3-4`.
 * @param {string} prerelease The explicit prerelease to release with, e.g. `beta.1`.
 */
function getVersionForRelease(version, prerelease) {

    // Strip out underscores
    const normalizedVersion = getNormalizedVersion(version);

    const versionWithoutPrerelease = getVersionWithoutPrerelease(normalizedVersion);

    if (prerelease) {
        return `${versionWithoutPrerelease}-${prerelease}`;
    }

    return versionWithoutPrerelease;
}

function getVersionWithoutPrerelease(version) {
    return `${major(version)}.${minor(version)}.${patch(version)}`;
}

/**
 * Clean invalid characters from the given version identifier.
 * @param {string} version The SEPG version.
 */
function getNormalizedVersion(version) {
    return version.replace(/[^0-9A-Za-z\.\-\+]/g, '-');
}

module.exports = {
    getVersion: getManifestVersion,
    getManifestVersion: getManifestVersion,
    setVersion: setManifestVersion,
    setManifestVersion: setManifestVersion,
    getPomVersion: getPomVersion,
    getVersionForCI: getVersionForCI,
    getVersionForRelease: getVersionForRelease,
    getVersionWithoutPrerelease: getVersionWithoutPrerelease
};
