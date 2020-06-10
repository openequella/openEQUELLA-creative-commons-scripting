/*
 *
 * Consumes a license type, a license version, and flags for 'allow commercial users' and 'allow modifications'
 *
 * Produces the appropriate Creative Commons title, description, and link/image.
 *
 * Any text being returned should be in an HTML tag, safe choice is a <span></span>
 *
 */

const CC_LIC_YES = "Yes";
const CC_LIC_NO = "No";
const CC_LIC_SHARE = "Share";
const CC_LIC_TYPE_CC = "Creative Commons";
const CC_LIC_TYPE_CCPD = "Creative Commons license for public domain";
const CC_LIC_DISPLAY_WIZARD = "W";
const CC_LIC_DISPLAY_SUMMARY = "S";
const CC_LIC_VER_3_0 = "3.0";
const CC_LIC_VER_4_0 = "4.0";

const CC_LIC_EMPTY_RESPONSE = '<span></span>';
const CC_LIC_LINK_DECOR_WIZARD = 'rel="license"';
const CC_LIC_LINK_DECOR_SUMMARY = 'class="blueLink" target="_blank" rel="license noopener noreferrer"';

// Titles

const CC_LIC_TITLE_BY_3_0 = '<span>Attribution (CC BY)</span>';
const CC_LIC_TITLE_BY_4_0 = '<span>Attribution International (CC BY)</span>';

const CC_LIC_TITLE_BY_SA_3_0 = '<span>Attribution Share Alike (BY-SA)</span>';
const CC_LIC_TITLE_BY_SA_4_0 = '<span>Attribution Share Alike International (BY-SA)</span>';

const CC_LIC_TITLE_BY_ND_3_0 = '<span>Attribution-No Derivative (CC BY-ND)</span>';
const CC_LIC_TITLE_BY_ND_4_0 = '<span>Attribution-No Derivative International (CC BY-ND)</span>';

const CC_LIC_TITLE_BY_NC_3_0 = '<span>Attribution Non-commercial (CC BY-NC)</span>';
const CC_LIC_TITLE_BY_NC_4_0 = '<span>Attribution Non-commercial International (CC BY-NC)</span>';

const CC_LIC_TITLE_BY_NC_SA_3_0 = '<span>Attribution Non-commercial Share Alike (CC BY-NC-SA)</span>';
const CC_LIC_TITLE_BY_NC_SA_4_0 = '<span>Attribution Non-commercial Share Alike International (CC BY-NC-SA)</span>';

const CC_LIC_TITLE_BY_NC_ND_3_0 = '<span>Attribution Non-commercial No Derivatives (CC BY-NC-ND)</span>';
const CC_LIC_TITLE_BY_NC_ND_4_0 = '<span>Attribution Non-commercial No Derivatives International (CC BY-NC-ND)</span>';

// BY descriptions

const CC_LIC_DESC_BY_3_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' + href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a> This license lets others distribute, remix, tweak, and build upon a work, even commercially, as long as they credit the author for the original creation.</span>'

const CC_LIC_DESC_BY_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' + href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a> lets others distribute, remix, tweak, and build upon a work, even commercially, as long as they credit the author for the original creation.</span>'

const CC_LIC_DESC_BY_4_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' + href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> This license lets others distribute, remix, tweak, and build upon a work, even commercially, as long as they credit the author for the original creation.</span>'

const CC_LIC_DESC_BY_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' + href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> lets others distribute, remix, tweak, and build upon a work, even commercially, as long as they credit the author for the original creation.</span>'

// BY-SA descriptions

const CC_LIC_DESC_BY_SA_3_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + '  href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 License</a>. This license lets others remix, tweak, and build upon a work even for commercial reasons, as long as they credit the author and license their new creations under the identical terms. This license is often compared to open source software licenses. All new works based on the item will carry the same license, so any derivatives will also allow commercial use.</span>';

const CC_LIC_DESC_BY_SA_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + '  href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 License</a> lets others remix, tweak, and build upon a work even for commercial reasons, as long as they credit the author and license their new creations under the identical terms. This license is often compared to open source software licenses. All new works based on the item will carry the same license, so any derivatives will also allow commercial use.</span>';

const CC_LIC_DESC_BY_SA_4_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + '  href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-Share Alike 4.0 International License</a>. This license lets others remix, tweak, and build upon a work even for commercial reasons, as long as they credit the author and license their new creations under the identical terms. This license is often compared to open source software licenses. All new works based on the item will carry the same license, so any derivatives will also allow commercial use.</span>';

const CC_LIC_DESC_BY_SA_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + '  href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-Share Alike 4.0 International License</a> lets others remix, tweak, and build upon a work even for commercial reasons, as long as they credit the author and license their new creations under the identical terms. This license is often compared to open source software licenses. All new works based on the item will carry the same license, so any derivatives will also allow commercial use.</span>';

// BY-ND descriptions

const CC_LIC_DESC_BY_ND_3_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nd/3.0/">Creative Commons Attribution-No Derivative Works 3.0 License</a>. This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to the original author.</span>';

const CC_LIC_DESC_BY_ND_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nd/3.0/">Creative Commons Attribution-No Derivative Works 3.0 License</a> allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to the original author.</span>';

const CC_LIC_DESC_BY_ND_4_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-No Derivative Works 4.0 International License</a>. This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to the original author.</span>';

const CC_LIC_DESC_BY_ND_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-No Derivative Works 4.0 International License</a> allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to the original author.</span>';

// BY-NC descriptions

const CC_LIC_DESC_BY_NC_3_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc/3.0/us/">Creative Commons Attribution Non-commercial 3.0 License</a>. This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don\'t have to license their derivative works on the same terms.</span>';

const CC_LIC_DESC_BY_NC_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc/3.0/us/">Creative Commons Attribution Non-commercial 3.0 License</a> lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don\'t have to license their derivative works on the same terms.</span>';

const CC_LIC_DESC_BY_NC_4_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc/4.0/us/">Creative Commons Attribution Non-commercial 4.0 International License</a>. This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don\'t have to license their derivative works on the same terms.</span>';

const CC_LIC_DESC_BY_NC_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc/4.0/us/">Creative Commons Attribution Non-commercial 4.0 International License</a> lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don\'t have to license their derivative works on the same terms.</span>';

// BY-NC-SA descriptions

const CC_LIC_DESC_BY_NC_SA_3_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc-sa/3.0/us/">Creative Commons Attribution Non-Commercial Share Alike 3.0 License</a>. This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms. Others can download and redistribute your work just like the by-nc-nd license, but they can also translate, make remixes, and produce new stories based on your work. All new work based on yours will carry the same license, so any derivatives will also be non-commercial in nature.</span>';

const CC_LIC_DESC_BY_NC_SA_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc-sa/3.0/us/">Creative Commons Attribution Non-Commercial Share Alike 3.0 License</a> lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms. Others can download and redistribute your work just like the by-nc-nd license, but they can also translate, make remixes, and produce new stories based on your work. All new work based on yours will carry the same license, so any derivatives will also be non-commercial in nature.</span>';

const CC_LIC_DESC_BY_NC_SA_4_0_SUMMARY = '<span>This work is licensed under a <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc-sa/4.0/us/">Creative Commons Attribution Non-Commercial Share Alike 4.0 International License</a>. This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms. Others can download and redistribute your work just like the by-nc-nd license, but they can also translate, make remixes, and produce new stories based on your work. All new work based on yours will carry the same license, so any derivatives will also be non-commercial in nature.</span>';

const CC_LIC_DESC_BY_NC_SA_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc-sa/4.0/us/">Creative Commons Attribution Non-Commercial Share Alike 4.0 International License</a> lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms. Others can download and redistribute your work just like the by-nc-nd license, but they can also translate, make remixes, and produce new stories based on your work. All new work based on yours will carry the same license, so any derivatives will also be non-commercial in nature.</span>';

// BY-NC-ND descriptions

const CC_LIC_DESC_BY_NC_ND_3_0_SUMMARY = '<span>This work is licensed under a  <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc-nd/3.0/us/"> Creative Commons Attribution Non-commercial No Derivatives 3.0 License </a>.  This license is the most restrictive of six main Creative Commons licenses, allowing redistribution. This license is often called the "free advertising" license because it allows others to download your works and share them with others as long as they mention you and link back to you, but they can\'t change them in any way or use them commercially.</span>';

const CC_LIC_DESC_BY_NC_ND_3_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc-nd/3.0/us/"> Creative Commons Attribution Non-commercial No Derivatives 3.0 License </a> is the most restrictive of six main Creative Commons licenses, allowing redistribution. This license is often called the "free advertising" license because it allows others to download your works and share them with others as long as they mention you and link back to you, but they can\'t change them in any way or use them commercially.</span>';

const CC_LIC_DESC_BY_NC_ND_4_0_SUMMARY = '<span>This work is licensed under a  <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/licenses/by-nc-nd/4.0/us/"> Creative Commons Attribution Non-commercial No Derivatives 4.0 International License </a>.  This license is the most restrictive of six main Creative Commons licenses, allowing redistribution. This license is often called the "free advertising" license because it allows others to download your works and share them with others as long as they mention you and link back to you, but they can\'t change them in any way or use them commercially.</span>';

const CC_LIC_DESC_BY_NC_ND_4_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/licenses/by-nc-nd/4.0/us/"> Creative Commons Attribution Non-commercial No Derivatives 4.0 International License </a> is the most restrictive of six main Creative Commons licenses, allowing redistribution. This license is often called the "free advertising" license because it allows others to download your works and share them with others as long as they mention you and link back to you, but they can\'t change them in any way or use them commercially.</span>';

// Public Domain description(s)

const CC_LIC_DESC_PD_1_0_SUMMARY = '<span>This work is licensed under a  <a ' + CC_LIC_LINK_DECOR_SUMMARY + ' href="https://creativecommons.org/publicdomain/mark/1.0/"> Creative Commons Public Domain 1.0 License </a>.  This work is free of known copyright restrictions.</span>';

const CC_LIC_DESC_PD_1_0_WIZARD = '<span>The <a ' + CC_LIC_LINK_DECOR_WIZARD + ' href="https://creativecommons.org/publicdomain/mark/1.0/"> Creative Commons Public Domain 1.0 License </a> marks the work as free of known copyright restrictions.</span>';


function getCcLicenseTitle(displayType, ccType, allowCommUses, allowMods, version, defaultVersion) {
	if(ccType == CC_LIC_TYPE_CC) {    
		var acu = cleanCcLicenseAllowCommUses(allowCommUses);
		var am = cleanCcLicenseAllowMods(allowMods);		
		var v = cleanCcLicenseVersion(version, defaultVersion);
		var d = cleanCcLicenseDisplayType(displayType)
	    	
		if(acu == CC_LIC_YES) {
			if(am == CC_LIC_YES) {
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_4_0;
				} else {
					return CC_LIC_TITLE_BY_3_0;
				}
			} else if(am == CC_LIC_SHARE) {
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_SA_4_0;
				} else {
					return CC_LIC_TITLE_BY_SA_3_0;
				}
			} else {
				// Assume 'No' for allowMods
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_ND_4_0;
				} else {
					return CC_LIC_TITLE_BY_ND_3_0;
				}
			}   
		} else {
			// Assume 'No' for allowCommUses
			if(am == CC_LIC_YES) {
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_NC_4_0;
				} else {
					return CC_LIC_TITLE_BY_NC_3_0;
				}
			} else if(am == CC_LIC_SHARE) {
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_NC_SA_4_0;
				} else {
					return CC_LIC_TITLE_BY_NC_SA_3_0;
				}
			} else {
				// Assume 'No' for allowMods
				if(v = CC_LIC_VER_4_0) {
					return CC_LIC_TITLE_BY_NC_ND_4_0;
				} else {
					return CC_LIC_TITLE_BY_NC_ND_3_0;
				}
			}
		}
		return "<span>Something went wrong.  Please contact your system administrator [Req=TITLE, Type=" + ccType + ", AM=" + am + ", ACU=" + acu + ", V=" + v + "]</span>";
	} else if(ccType == CC_LIC_TYPE_CCPD) {    
		return CC_LIC_EMPTY_RESPONSE; // Historically, no title needed
	} else {
		// Assume not a CC license
		return CC_LIC_EMPTY_RESPONSE;
	}	 
};

function getCcLicenseHeaderDescription(displayType, ccType, allowCommUses, allowMods, version, defaultVersion) {
	if(ccType == CC_LIC_TYPE_CC) {    
		var acu = cleanCcLicenseAllowCommUses(allowCommUses);
		var am = cleanCcLicenseAllowMods(allowMods);		
		var v = cleanCcLicenseVersion(version, defaultVersion);
	    	var d = cleanCcLicenseDisplayType(displayType)
  
		if(acu == CC_LIC_YES) {
			if(am == CC_LIC_YES) {
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_4_0_SUMMARY;
					}
				} else {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_3_0_SUMMARY;
					}
				}
			} else if(am == CC_LIC_SHARE) {
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_SA_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_SA_4_0_SUMMARY;
					}
				} else {
					// Assume 3.0
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_SA_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_SA_3_0_SUMMARY;
					}
				}
			} else {
				// Assume 'No' for allowMods
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_ND_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_ND_4_0_SUMMARY;
					}
				} else {
					// Assume 3.0
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_ND_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_ND_3_0_SUMMARY;
					}
				}
			}   
		} else {
			// Assume 'No' for allowCommUses
			if(am == CC_LIC_YES) {
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_4_0_SUMMARY;
					}
				} else {
					// Assume 3.0
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_3_0_SUMMARY;
					}
				}
			} else if(am == CC_LIC_SHARE) {
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_SA_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_SA_4_0_SUMMARY;
					}
				} else {
					// Assume 3.0
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_SA_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_SA_3_0_SUMMARY;
					}
				}
			} else {
				// Assume 'No' for allowMods
				if(v == CC_LIC_VER_4_0) {
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_ND_4_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_ND_4_0_SUMMARY;
					}
				} else {
					// Assume 3.0
					if(d == CC_LIC_DISPLAY_WIZARD) {
						return CC_LIC_DESC_BY_NC_ND_3_0_WIZARD;
					} else {
						return CC_LIC_DESC_BY_NC_ND_3_0_SUMMARY;
					}
				}
			}
		}
		return "<span>Something went wrong.  Please contact your system administrator [Req=DESC, Type=" + ccType + ", AM=" + am + ", ACU=" + acu + ", V=" + v + "]</span>";
	} else if(ccType == CC_LIC_TYPE_CCPD) {    
		return CC_LIC_EMPTY_RESPONSE;
	} else {
		// Assume not a CC license
		return CC_LIC_EMPTY_RESPONSE;
	}	 
};

function getCcLicenseFooterDescription(displayType, ccType, allowCommUses, allowMods, version, defaultVersion) {
	var d = cleanCcLicenseDisplayType(displayType)
  	
	if(ccType == CC_LIC_TYPE_CCPD) {    
		if(d == CC_LIC_DISPLAY_WIZARD) {
			return CC_LIC_DESC_PD_1_0_WIZARD;
		} else {
			return CC_LIC_DESC_PD_1_0_SUMMARY;
		}
	} else {
		return CC_LIC_EMPTY_RESPONSE;
	}	 
};

function getCcLicenseLinkAndImage(displayType, ccType, allowCommUses, allowMods, version, defaultVersion) {
	if(ccType == CC_LIC_TYPE_CC) {    
		var acu = cleanCcLicenseAllowCommUses(allowCommUses);
		var am = cleanCcLicenseAllowMods(allowMods);		
		var v = cleanCcLicenseVersion(version, defaultVersion);
		var d = cleanCcLicenseDisplayType(displayType)	    
		
		if(acu == CC_LIC_YES) {
			if(am == CC_LIC_YES) {
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			} else if(am == CC_LIC_SHARE) {
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by-sa", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by-sa", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			} else {
				// Assume 'No' for allowMods
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by-nd", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by-nd", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			}   
		} else {
			// Assume 'No' for allowCommUses
			if(am == CC_LIC_YES) {
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by-nc", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by-nc", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			} else if(am == CC_LIC_SHARE) {
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by-nc-sa", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by-nc-sa", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			} else {
				// Assume 'No' for allowMods
				if(d == CC_LIC_DISPLAY_WIZARD) {
					return buildCcLicenseLinkAndImageNotPD("by-nc-nd", v, CC_LIC_LINK_DECOR_WIZARD);				
				} else {
					return buildCcLicenseLinkAndImageNotPD("by-nc-nd", v, CC_LIC_LINK_DECOR_SUMMARY);
				}
			}
		}
		return "<span>Something went wrong.  Please contact your system administrator [Req=IMG, Type=" + ccType + ", AM=" + am + ", ACU=" + acu + ", V=" + v + "]</span>";
	} else if(ccType == CC_LIC_TYPE_CCPD) {
		if(d == CC_LIC_DISPLAY_WIZARD) {
			return buildCcLicenseLinkAndImagePD(CC_LIC_LINK_DECOR_WIZARD);				
		} else {
			return buildCcLicenseLinkAndImagePD(CC_LIC_LINK_DECOR_SUMMARY);
		}    
	} else {
		// Assume not a CC license
		return CC_LIC_EMPTY_RESPONSE;
	}	 
};

function enableCcLicenseDisplay(ccType) {
	return (ccType == CC_LIC_TYPE_CC) || (ccType == CC_LIC_TYPE_CCPD);
};

function attributesReadyForCcLicenseDisplay(ccType, allowCommUses, allowMods) {
	return (ccType == CC_LIC_TYPE_CCPD) || 
               (allowCommUses == cleanCcLicenseAllowCommUses(allowCommUses)) && 
		(allowMods == cleanCcLicenseAllowMods(allowMods));
};

// Helper methods

function buildCcLicenseLinkAndImageNotPD(ccType, version, linkDecorator) {
	return '<a ' + linkDecorator + ' href="https://creativecommons.org/licenses/' + ccType + '/' + version + '/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/' + ccType + '/' + version + '/88x31.png" /></a>';
}

function buildCcLicenseLinkAndImagePD(linkDecorator) {
	return '<a ' + linkDecorator + ' href="https://creativecommons.org/publicdomain/mark/1.0/"><img src="https://i.creativecommons.org/p/mark/1.0/88x31.png" style="border-style: none;" alt="Public Domain Mark" /></a>';
}

function cleanCcLicenseAllowCommUses(allowCommUses) {
	if((allowCommUses != undefined) && (allowCommUses == CC_LIC_YES)) {
		return allowCommUses;
	}
	return CC_LIC_NO;
}

function cleanCcLicenseAllowMods(allowMods) {
	if((allowMods != undefined) && ((allowMods == CC_LIC_YES) || (allowMods == CC_LIC_SHARE))) {
		return allowMods;
	}
	return CC_LIC_NO;
}

function cleanCcLicenseDisplayType(dType) {
	// Default or unknown is SUMMARY ('S')
	if((dType != undefined) && (dType == CC_LIC_DISPLAY_WIZARD)) {
		return dType;
	}
	return CC_LIC_DISPLAY_SUMMARY;
}

function cleanCcLicenseVersion(version, defaultVersion) {
	if ((version != undefined) && (version.length > 0)) {
		return version;
	}
	return defaultVersion;
}

