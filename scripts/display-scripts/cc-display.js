<script src="/{context}/s/cc-license-data"></script>
<script type="text/javascript">
    // placeholder HTML entities are in the above section.
    $(document).ready(function($) {
        var ccType = '${xml.get("/metadata/drm/type")}';
        if(enableCcLicenseDisplay(ccType)) {
            const acu = '${xml.get("/metadata/drm/cc/allow.commercial.uses")}';
            const am = '${xml.get("/metadata/drm/cc/allow.modifications")}';
            const v = '${xml.get("/metadata/drm/cc/version")}';
            const defaultV = '${xml.get("/metadata/drm/cc/system.default.license.version")}';
            const dType = 'S';
            if(attributesReadyForCcLicenseDisplay(ccType, acu, am)) {
                $( "#licenseHeaderDescription" ).html(getCcLicenseHeaderDescription(dType, ccType, acu, am, v, defaultV));
                $( "#licenseLinkAndImage" ).html(getCcLicenseLinkAndImage(dType, ccType, acu, am, v, defaultV));
                $( "#licenseFooterDescription" ).html(getCcLicenseFooterDescription(dType, ccType, acu, am, v, defaultV));
            } else {
                $( "#licenseHeaderDescription" ).html("Unable to generate the Creative Commons license until 'Allow Commercial Uses' and 'Allow Modifications' have been configured.");
            }
        }
    });
</script>
