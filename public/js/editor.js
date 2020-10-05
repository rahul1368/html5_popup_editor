
/**
 * 
 * @param {btnTxtElem} SideBar Button Text element
 * @param {btnTxt}  JS variable to hold current btn txt
 * @param {btnElem} Modal Template button element
 * @param {headerTxtElem} SideBar Header Text element
 * @param {headerTxt}  JS variable to hold current header txt
 * @param {upperTxtElem} Modal Template header element
 * @param {footerTxtElem} SideBar Footer Text element
 * @param {footerTxt}  JS variable to hold current footer txt
 * @param {lowerTxtElem} Modal Template footer element
 * @param {modalbgColorElem} SideBar BG Color element ( ==> not used )
 * @param {modalbgColor}  JS variable to hold current BG color value
 * @param {modalContentbgColorElem} SideBar Modal BG Color element ( ==> this is used )
 */

// Sidebar Content Editing Listeners
//Syncing with modal template elements
btnTxtElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    btnTxt = e.target.innerText;
    btnElem.innerText = btnTxt;

}
headerTxtElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    headerTxt = e.target.innerText;
    upperTxtElem.innerText = headerTxt;

}
footerTxtElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    footerTxt = e.target.innerText;
    lowerTxtElem.innerText = footerTxt;
}
modalbgColorElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    modalbgColor = e.target.innerText;
}
modalContentbgColorElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    modalContentbgColor = e.target.innerText;
    document.getElementById("modalContentDiv").style.backgroundColor = modalContentbgColor;

}


// Modal template elements listeners for syncing with left sidebar elements
upperTxtElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        return;
    }
    headerTxt = e.target.innerText;
    headerTxtElem.innerText = headerTxt;
};
lowerTxtElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        return;
    }
    footerTxt = e.target.innerText;
    footerTxtElem.innerText = footerTxt;
};
btnElem.onkeyup = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        return;
    }
    btnTxt = e.target.innerText;
    btnTxtElem.innerText = btnTxt;
};

