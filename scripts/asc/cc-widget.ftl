<#----------------------------->
<#-- Visibility Script       -->
<#----------------------------->

var bRet = false;
if( xml.contains('/metadata/drm/type', 'Creative Commons') &&
    xml.exists('/metadata/drm/cc/allow.commercial.uses') &&
    xml.exists('/metadata/drm/cc/allow.modifications'))
{
    bRet = true;
}
return bRet;


<#----------------------------->
<#-- Display Template        -->
<#----------------------------->

<#assign currentCcVersion = xml.get('/metadata/drm/cc/version')/>
<#assign defaultCcVersion = attributes.get('/default-cc-license')/>

<#if !(currentCcVersion?has_content) >
    <#-- if the cc license version is not set, display what the current CC version will be set to -->
    <p> The Creative Commons license version will be ${defaultCcVersion}. </p>
<#elseif currentCcVersion == defaultCcVersion >
    <#-- if the cc license version is set and is equal to the default cc license version, -->
    <#-- display that version and note it's current -->
    <p> The Creative Commons license version is current (${defaultCcVersion}). </p>
<#else>
    <#-- if the cc license version is not equal to the default cc license version, display the -->
    <#-- current version and the default cc license version -->
    <p> The Creative Commons license version not current.  Do you want to upgrade from (${currentCcVersion}) to (${defaultCcVersion})?</p>
</#if>


<#----------------------------->
<#-- On-Load Script          -->
<#----------------------------->

attributes.set('/default-cc-license', require('cc-license').getCurrentDefaultLicenseVersion());

