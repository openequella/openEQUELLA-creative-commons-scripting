var bRet = false;
if( (xml.contains('/metadata/drm/type', 'Creative Commons') &&
    xml.exists('/metadata/drm/cc/allow.commercial.uses') &&
    xml.exists('/metadata/drm/cc/allow.modifications')) ||
    xml.contains('/metadata/drm/type', 'Creative Commons license for public domain'))
{
    xml.set('/metadata/drm/cc/system.default.license.version', require('cc-license').getCurrentDefaultLicenseVersion());
    bRet = true;
}
return bRet;
