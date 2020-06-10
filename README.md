# openEQUELLA-creative-commons-scripting

openEQUELLA Scripting to support Creative Commons

Purpose: Enable v4.0 of Creative Commons in openEQUELLA collections, with the consideration that previous versions _may_ exist, and future versions _will_ exist.

This example of Creative Commons logic aims to bring the logic into a ‘single source of truth’.  This removes the need for duplicated logic in each affected collection.

## Design Decisions

For the version placement in the schema, we'll use `/metadata/drm/cc/version` in the schema. 

All collections associated with schema can be in-scope to be covered with Creative Commons.

Assuming an institution set up Creative Commons without regard for version, the metadata will need to become consistent. Consider running a script on all items in the institution that if `/metadata/drm/type` is set to Creative Commons, then set the version to '3.0'. 

There will be some text above where the CC license appears in the contribution form - either noting the item is using a back-level version, or noting that the license is up-to-date. If the license is back-leveled, there will be a checkbox to let the user upgrade to the latest version. This upgrade will happen when the item is saved.

Users will not have an option to down-grade a license version.

Due to the possibility of a large number of collections needing this logic, we will gather the configuration / customization into a 'single source of truth' collection / item. This will be in the form of a new `License Management` system collection that should only be available to Sys Admins, but the items should be viewable to ‘Everyone’.

The single-source-of-truth Javascript will support different wording for versions and ‘display types’.

## Steps to Enable Solution

### Update Existing Metadata Per Collection

Using a Bulk Action script, set existing resource metadata that is CC licensed to version 3.0:

```javascript
if(xml.contains("/metadata/drm/type", "Creative Commons") && !xml.exists("/metadata/drm/cc/version")) {
    xml.set("/metadata/drm/cc/version", "3.0");
}
```

Using a custom report, you can confirm all resources with the type of ‘Creative Commons’ have been set to 3.0 .

### Setup a Single Source of Truth

Use a collection that is editable / discoverable by System Admins, but viewable to Everyone with the following features:
* Title:  basic edit field
* Description:  basic edit field
* Current Default License Version:  basic edit field with path /metadata/current.license.version .
* Contains an Attachment widget

Contribute an item for ‘Creative Commons’

Specify the current license.

Upload [CreativeCommonsData.js](scripts/javascript/CreativeCommonsData.js)

After that item is published, associate the js file link with a shortcut URL set to ( /cc-license-data ) with the format:
 https://(domain)/items/(itemuuid)/0/creativeCommonsData.js

Add a user script (JS) called 'cc-license' (It’s under Settings.  You may need to Grant the permissions to manage user scripts) :

[User Script](scripts/user-scripts/cc-license.js)

### Update Target Collection Wizard

_For each collection_

In the Collection Wizard, under the ‘Derivative works’ widget, add an ‘Advanced Scripting Control’ with the following:

[ASC](scripts/asc/cc-widget.js)

Check Box Group - Under the ASC, add a Check Box Group with a metadata path of `/metadata/drm/system-upgrade-version` and a single name / value pair of:

Name: Yes - Upgrade Creative Commons License Version
Value: upgrade_version

Add the following visibility script to the check box group:

[ASC Visibility](scripts/asc/cc-widget-visibility.js)


Add a single 'Raw HTML':
[Raw HTML](scripts/display-scripts/cc-raw-html.html)

Add the visibility script to the 'Raw HTML':
[Visiblity Script](scripts/display-scripts/cc-raw-html-visibility.html)

### Update Target Collection Item Summary Display Template

Add a display template XSLT with:

[XSLT](scripts/display-scripts/cc-display.xslt)

Add a scripted section with:

[Scripted Display Section](scripts/display-scripts/cc-display.js)

### Update Target Collection Save Script

Add an expert save snippet:

[Collection Save Script](scripts/save-scripts/cc-expert-save.js)


