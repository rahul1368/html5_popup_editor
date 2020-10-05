<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML5 Popup Editor</title>
        <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
        <link href="{{ URL::asset('css/draganddrop.css') }}" rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="{{ URL::asset('js/draganddrop.js') }}" type='text/javascript'></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" href="{{ URL::asset('css/layout.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('css/modal.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('css/editor.css') }}">
    </head>
    <body>
        <div class="sidenav">
            <form>
                <div class="content-edit">
                    <label for="headerTxt">Header Text</label>
                    <div contenteditable="true" 
                        id="headerTxt" 
                        name="headerTxt" >
                        This is header..
                    </div>
                </div>
                <div class="content-edit">
                    <label for="btnTxt">Button Text</label>
                    <div contenteditable="true" id="btnTxt" name="btnTxt" >
                        Submit
                    </div>
                </div>
                <div class="content-edit">
                    <label for="footerTxt">Footer Text</label>
                    <div contenteditable="true" 
                        id="footerTxt" 
                        name="footerTxt" >
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <div class="content-edit">
                    <label for="headerTxt"> Modal BG Color</label>
                    <div contenteditable="true" 
                        id="modalbgColor" 
                        name="modalbgColor" >
                        #df7a5f
                    </div>
                </div>
                <div class="content-edit">
                    <label for="headerTxt"> Modal Content BG Color</label>
                    <div contenteditable="true" 
                        id="modalContentbgColor" 
                        name="modalContentbgColor" >
                        #df7a5f
                    </div>
                </div>
                <!-- <div contenteditable="true" class="content-edit">
                    <label for="inputFieldEdit">Input Field</label>
                    <div
                        id="inputFieldEdit" 
                        name="inputFieldEdit" >
                        #ffffff
                    </div>
                </div> -->
            </form>
        </div>
        <div class="main">
            <!-- Trigger/Open The Modal -->
            <button id="openBtn">Open Modal Template</button>
            <button  style="cursor:pointer;float:right;" type="button" id="closeBtn">Close Modal Template</button>

            <button id="saveBtn" type="button">Save Changes</button>
            <!-- <div id="myModal1" class="modal"> -->
                <!-- Modal content -->
                <div id="modalContentDiv" class="modal-content modal-content-box-shadow">
                    <div class="star-group">
                        <span id="leftStar" class="drag" style="font-size:100%;color:#c85b46;">★</span>
                        <span id="middleStar" class="drag" style="font-size:300%;color:#c85b46;">★</span>
                        <span id="rightStar" class="drag" style="font-size:100%;color:#c85b46;">★</span>
                    </div>
                    <h2 contenteditable="true" id="upperTxt" class="drag" style="
                        margin-top: 7%;color: #fcfefd;text-align: center;
                    ">This is header..</h2>
                    <input id="inputField" class="drag" type="text" placeholder="Enter some text..." style="
                        width: 70%;
                        height: 54px;
                        border-radius: 7px;
                        margin-top: 8.5rem;
                        background-color: #fcfeff;
                        padding: 1rem;
                    ">
                    <button contenteditable="true" id="btnElem" class="drag" type="button" style="
                        width: 50%;
                        height: 50px;
                        margin-top: 0rem;
                        border-radius: 7px;
                        background-color: #484343;
                        color: #c3c3c3;
                    ">Submit</button>
                    <p contenteditable="true" id="lowerTxt" class="drag" style="
            text-align: center;color: #f4d7ca;margin: 5.5rem auto;width: 37%;width: 44%;
                    ">Lorem ipsum dolor sit amet</p>
                    
                    
                </div>
            <!-- </div> -->
        </div>
        <script src="{{ URL::asset('js/selector.js') }}"></script>
        <script src="{{ URL::asset('js/editor.js') }}"></script>
        <!-- <script src="{{ URL::asset('js/custom-popup.js') }}"></script> -->
        <script>

            var objConstructor = function(position,content){
                this.position = position;
                this.content = content;
            }
            var requestObjConstructor = function(top,left,content,id,title) {
                this.top = (top || "0px");
                this.left = (left || "0px");
                this.content = (content || "None");
                this.id = id;
                this.title = title;

            }
            var headerTxt = "This is header..",footerTxt = "Lorem ipsum dolor sit amet", btnTxt = "Submit",modalbgColor = "#df7a5f",modalContentbgColor = "#df7a5f";
            
            var customPopUpModal = {
                headerH2:new objConstructor({top:null,left:null},"This is header.."),
                footerP:new objConstructor({top:null,left:null},"Lorem ipsum dolor sit amet"),
                btn:new objConstructor({top:null,left:null},"Submit"),
                modal:new objConstructor({top:null,left:null},"#ffffff"),
                input:new objConstructor({top:null,left:null},"Enter some text here.."),
                leftStar:new objConstructor({top:null,left:null},null),
                middleStar:new objConstructor({top:null,left:null},null),
                rightStar:new objConstructor({top:null,left:null},null),
                modalbgColor:new objConstructor({top:null,left:null},modalbgColor),
                modalContentbgColor:new objConstructor({top:null,left:null},modalContentbgColor),
            }
            

            function findPosition(element){
                var left = element.style.left;
                var top = element.style.top;
                return {top,left};
            }

            // Draggable items initialization
            $(function(){
                $('.drag').draggable();   
            });
            $(document).ready(function(){
                // Get the <span> element that closes the modal
                var responseStatus = [];
                var closeBtn = document.getElementById("closeBtn");
                var saveBtn = document.getElementById("saveBtn");
                saveBtn.onclick = function() {
                    customPopUpModal.leftStar.position = findPosition(document.getElementById("leftStar"));
                    customPopUpModal.middleStar.position = findPosition(document.getElementById("middleStar"));
                    customPopUpModal.rightStar.position = findPosition(document.getElementById("rightStar"));
                    
                    customPopUpModal.btn.position = findPosition(document.getElementById("btnElem"));
                    customPopUpModal.input.position = findPosition(document.getElementById("inputField"));
                    customPopUpModal.headerH2.position = findPosition(document.getElementById("upperTxt"));
                    customPopUpModal.footerP.position = findPosition(document.getElementById("lowerTxt"));

                    customPopUpModal.btn.content = btnTxt;
                    customPopUpModal.headerH2.content = headerTxt;
                    customPopUpModal.footerP.content = footerTxt;

                    customPopUpModal.modalbgColor.content = modalbgColor;
                    customPopUpModal.modalContentbgColor.content = modalContentbgColor;

                    // Save all changes into back end                    
                    
                    var leftStarEl = new requestObjConstructor(customPopUpModal.leftStar.position.top,customPopUpModal.leftStar.position.left,customPopUpModal.leftStar.content,'7','leftStar');
                    var rightStarEl = new requestObjConstructor(customPopUpModal.rightStar.position.top,customPopUpModal.rightStar.position.left,customPopUpModal.rightStar.content,'9','rightStar');
                    var middleStarEl = new requestObjConstructor(customPopUpModal.middleStar.position.top,customPopUpModal.middleStar.position.left,customPopUpModal.middleStar.content,'8','middleStar');

                    var headerH2El = new requestObjConstructor(customPopUpModal.headerH2.position.top,customPopUpModal.headerH2.position.left,customPopUpModal.headerH2.content,'3','headerH2');
                    var inputEl = new requestObjConstructor(customPopUpModal.input.position.top,customPopUpModal.input.position.left,customPopUpModal.input.content,'2','input');
                    var btnEl = new requestObjConstructor(customPopUpModal.btn.position.top,customPopUpModal.btn.position.left,customPopUpModal.btn.content,'1','btn');

                    var footerPEl = new requestObjConstructor(customPopUpModal.footerP.position.top,customPopUpModal.footerP.position.left,customPopUpModal.footerP.content,'4','footerP');
                    var modalbgColorEl = new requestObjConstructor(customPopUpModal.modalbgColor.position.top,customPopUpModal.modalbgColor.position.left,customPopUpModal.modalbgColor.content,'5','modalbgColor');
                    var modalContentbgColorEl = new requestObjConstructor(customPopUpModal.modalContentbgColor.position.top,customPopUpModal.modalContentbgColor.position.left,customPopUpModal.modalContentbgColor.content,'6','modalContentbgColor');
                    Promise.all(
                    [makePostRequest(leftStarEl),
                    makePostRequest(rightStarEl),
                    makePostRequest(middleStarEl),
                    makePostRequest(headerH2El),
                    makePostRequest(inputEl),
                    makePostRequest(btnEl),
                    makePostRequest(footerPEl),
                    makePostRequest(modalbgColorEl),
                    makePostRequest(modalContentbgColorEl)]).then(res => {
                        swal({
                            title: "Good job!",
                            text: "All changes saved successfully!",
                            icon: "success",
                        });
                    }).catch(err => {
                        swal({
                            title: "Oops!",
                            text: "Something went wrong!",
                            icon: "error",
                        });
                    });
                }
                function makePostRequest(params) {
                    const API_URL = '/api/v1/items/update';
                    var options = {
                        method: 'post',
                        headers:{
                           'Accept':'application/json',
                           'Content-Type': 'application/json',
                        }
                    } 
                    options.body = JSON.stringify(params);
                    return fetch(API_URL, options);
                }

                    // Get the modal
                var modal = document.getElementById("modalContentDiv");

                // Get the button that opens the modal
                var btn = document.getElementById("openBtn");

                // When the user clicks on the button, open the modal
                btn.onclick = function() {
                    modal.style.display = "block";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                // When the user clicks on closeBtn, close the modal
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                btnElem.onmousemove = function(e){
                    if(e.target.style.top && e.target.style.left){
                        //Updating popup object 
                        customPopUpModal.btn.position.top = e.target.style.top;
                        customPopUpModal.btn.position.left = e.target.style.left;

                    }
                }
                var draggableElemens = document.getElementsByClassName('drag');
                for (let index = 0; index < draggableElemens.length; index++) {
                    const element = draggableElemens[index];
                    element.onmouseenter = function(e){
                        e.target.style.borderStyle = "dotted";
                    } 
                    element.onmouseleave = function(e){
                        e.target.style.borderStyle = "none";
                    }
                    
                }
            });
        </script>
    </body>
</html>