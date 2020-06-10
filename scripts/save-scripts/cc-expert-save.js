{ // Creative Commons version handling
    
var versionXpath = '/metadata/drm/cc/version';
var upgradeVersionXpath = '/metadata/drm/system-upgrade-version'

// If the license type is Creative Commons, and the version is not set, set the version to the default
// OR
// If the 'upgrade license version flag is set', replace the current version with the default version.

// For troubleshooting
if(false) {
    xml.deleteAll('/metadata/debug');
    xml.set('/metadata/debug/d1', xml.contains('/metadata/drm/type', 'Creative Commons'));
    xml.set('/metadata/debug/d2', !xml.exists(versionXpath));
    xml.set('/metadata/debug/d3', xml.exists(upgradeVersionXpath));
    xml.set('/metadata/debug/d4', require('cc-license').getCurrentDefaultLicenseVersion());
}
if(xml.contains('/metadata/drm/type', 'Creative Commons') &&
    (!xml.exists(versionXpath) ||
      xml.exists(upgradeVersionXpath))) {
    xml.set(versionXpath, require('cc-license').getCurrentDefaultLicenseVersion());

    // Reset system state
    xml.deleteAll(upgradeVersionXpath);
} else if (!xml.contains('/metadata/drm/type', 'Creative Commons')) {
    // Not Creative Commons, so remove old CC data (primarily the version).
    xml.deleteAll('/metadata/drm/cc/');
}
// Clean up system / control data
xml.deleteAll('/metadata/drm/cc/system.default.license.version');

}
