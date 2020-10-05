/**
 * Returns HTML element by id
 * @param {String} id HTML element id attribute value
 */
function getElem(id){
    return document.getElementById(id);
}

/**
 * Modal elements
 * @param {btnElem} Modal Template button element
 * @param {upperTxtElem} Modal template header element
 * @param {lowerTxtElem} Modal template footer element
 * @param {inputFieldElem} Modal template input element
 * @param {leftStarElem} Modal template left star element
 * @param {middleStarElem} Modal template middle star element
 * @param {rightStarElem} Modal template right star element

 */
var upperTxtElem = getElem('upperTxt');
var lowerTxtElem = getElem('lowerTxt');
var btnElem = getElem('btnElem');
var inputFieldElem = getElem('inputField');
var leftStarElem = getElem('leftStar');
var middleStarElem = getElem('middleStar');
var rightStarElem = getElem('rightStar');

/**
 * Editor Elements
 * @param {headerTxtElem} SideBar Header Text element
 * @param {footerTxtElem} SideBar Footer Text element
 * @param {btnTxtElem} SideBar Button Text element
 * @param {modalbgColorElem} SideBar BG Color element
 * @param {modalContentbgColorElem} SideBar Modal BG Color element
 */
var headerTxtElem = getElem('headerTxt');
var footerTxtElem = getElem('footerTxt');
var btnTxtElem = getElem('btnTxt');
var modalbgColorElem = getElem('modalbgColor');
var modalContentbgColorElem = getElem('modalContentbgColor');
var inputFieldEdit = getElem('inputFieldEdit');