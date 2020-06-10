/**
*
* Offers a concise way to determine the current default CC license version
*
* The item uuid below should match the ‘single source of truth’ item
*
*/
module.exports.getCurrentDefaultLicenseVersion = function () {
    var ccLicenseDataItem = items.getLiveItem('{your-control-item-uuid}');
    return ccLicenseDataItem.getXml().get('/metadata/current.license.version');
};

