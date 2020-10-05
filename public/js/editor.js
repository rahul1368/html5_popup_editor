// Content Editing Listeners

btnTxtElem.onkeyup = function(e){
    btnTxt = e.target.innerText;
    btnElem.innerText = btnTxt;

}
headerTxtElem.onkeyup = function(e){
    headerTxt = e.target.innerText;
    upperTxtElem.innerText = headerTxt;

}
footerTxtElem.onkeyup = function(e){
    footerTxt = e.target.innerText;
    lowerTxtElem.innerText = footerTxt;
}
modalbgColorElem.onkeyup = function(e){
    modalbgColor = e.target.innerText;
    document.getElementById("myModal1").style.backgroundColor = modalbgColor;

}
modalContentbgColorElem.onkeyup = function(e){
    modalContentbgColor = e.target.innerText;
    document.getElementById("modalContentDiv").style.backgroundColor = modalContentbgColor;

}

