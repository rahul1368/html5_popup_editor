
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
modalbgColorElem.onchange = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    modalbgColor = e.target.value;
}
modalContentbgColorElem.onchange = function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        var child = e.target.lastElementChild;
        while(child){
            e.target.removeChild(child);
            child = e.target.lastElementChild;
        }
        return;
    }
    modalContentbgColor = e.target.value;
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

/**
 * Listeners for inline editing
 */

upperTxtElem.onclick = function(e){
    var self = this;
    setTimeout(function() {
        self.focus();
        document.execCommand('selectAll', false, null);
        // collapse selection to the end
        document.getSelection().collapseToEnd();  
     }, 0);
}

lowerTxtElem.onclick = function(e){
    var self = this;
    setTimeout(function() {
        self.focus();
        document.execCommand('selectAll', false, null);
        // collapse selection to the end
        document.getSelection().collapseToEnd();  
     }, 0);
}

btnElem.onclick = function(e){
    var self = this;
    setTimeout(function() {
        self.focus();
        document.execCommand('selectAll', false, null);
        // collapse selection to the end
        document.getSelection().collapseToEnd();  
     }, 0);
}

function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}