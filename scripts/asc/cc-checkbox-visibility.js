var bRet = false;

if( xml.contains('/metadata/drm/type', 'Creative Commons') &&
    xml.exists('/metadata/drm/cc/allow.commercial.uses') &&
    xml.exists('/metadata/drm/cc/allow.modifications') &&
    xml.exists('/metadata/drm/cc/version') &&
    !xml.contains('/metadata/drm/cc/version', require('cc-license').getCurrentDefaultLicenseVersion()))
{
    bRet = true;
}
return bRet;
