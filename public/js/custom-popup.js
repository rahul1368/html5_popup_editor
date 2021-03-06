/**
 * Script to load custom popup modal
 * Author: Rahul Kumar
 */
(function(){
    // Proxy url to avoid CORS 
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //Fetching all changes saved by user for custom popup modal by HTML5 Popup Editor
    fetch(proxyUrl + 'http://15.206.195.65/api/v1/items/', {
        method: 'get',headers:{"Accept":"application/json","Access-Control-Allow-Origin":"['*']"},
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        //Pop up modal changes object
        var modalChangesObj = {};
        //Check if response is not empty
        if(response instanceof Array && response.length > 0){
            //Building Pop up modal changes object from the response
            for (const item of response) {
                modalChangesObj[item.title] = {
                    top:item.top,left:item.left,content:item.content
                }
            }
        }
        //Calling method to construct custom popup modal
        createCustomPopup(modalChangesObj);
    }).catch(function(err) {
        console.log(err);
    });
    /** Create custom popup */
    /**
     * Returns HTML element after adding style and attributes
     * @param {String} type 
     * @param {Object} styleObj 
     * @param {Object} attributeObj 
     */
    function createElementFunc(type,styleObj,attributeObj){
        var htmlElem = document.createElement(type);
        Object.keys(styleObj).map(key => {
            htmlElem.style[key] = styleObj[key];
        });
        Object.keys(attributeObj).map(key => {
            htmlElem[key] = attributeObj[key];
        });
        return htmlElem;
    }
    /**
     * Setting the correct top and left value for an element
     * @param {Object} src: Postion object of an element 
     * @param {*} dest : HTML element whose top and left values should be set
     */
    function setPosition(src,dest){
        if(src.top != '0px'){
            dest.top = src.top;
        }
        if(src.left != '0px'){
            dest.left = src.left;
        }
        return dest;
    }
    /**
     * Method that constructs custom popup modal
     * @param {Object} modalObj : custom popup modal changes object
     */
    function createCustomPopup(modalObj){

        var myModalDiv = createElementFunc('div',{
            display: 'none', /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '1', /* Sit on top */
            left: '0',
            top: '0',
            width: '100%', /* Full width */
            height: '100%', /* Full height */
            overflow: 'auto', /* Enable scroll if needed */
            backgroundColor: 'rgb(0,0,0)', /* Fallback color */
            backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
        
        },{className:'custom-modal-123',id:'customModalDiv'});
        //Modal content div
        var modalContentDiv = createElementFunc('div',{
            display: 'block',
            position: 'relative',
            zIndex: '1',
            left: '0',
            top: '0',
            overflow: 'hidden',
            backgroundColor: modalObj.modalContentbgColor.content,
            margin: '0% auto',
            width: '550px',
            height:'550px',
            borderRadius:'50%',
            border: '10px solid #ffffff',

        },{className:'custom-modal-content-123',id:'customModalContentDiv'});
        var starGroupDiv = createElementFunc('div',{
            display: 'block',
            width: '100%',
            height: '20px',
            textAlign: 'center',
            marginBottom: '20%'
        },{});
        var closeSpanElem = createElementFunc('span',{
            background: 'rgb(255, 255, 255)',
            color: 'rgb(8, 7, 7)',
            textDecoration: 'none',
            border: '3px solid #fff',
            borderRadius:'50%',
            padding: '1px 8px',
            marginLeft:'48%',
            marginTop:'8px',
            display:'inline-block',
            cursor:'pointer'
        },{innerHTML:'&times;',id:'customPopUpClose'});
        closeSpanElem.onclick = function(){
            //document.getElementById('customModalContentDiv').style.display = 'none';
            document.getElementById('customModalDiv').style.display = 'none';

        }
        var leftStarStyle = {position:"relative",fontSize:"100%",color:"#c85b46",display:'inline-block'};
        setPosition(modalObj.leftStar,leftStarStyle);
        var rightStarStyle = {position:"relative",fontSize:"100%",color:"#c85b46",display:'inline-block'};
        setPosition(modalObj.rightStar,rightStarStyle);
        var middleStarStyle = {position:"relative",fontSize:"300%",color:"#c85b46",display:'inline-block'};
        setPosition(modalObj.middleStar,middleStarStyle);
        
        var leftStarSpanElem = createElementFunc('span',leftStarStyle,{innerHTML:"★"});
        var middleStarSpanElem = createElementFunc('span',middleStarStyle,{innerHTML:"★"});
        var rightStartSpanElem = createElementFunc('span',rightStarStyle,{innerHTML:"★"});
        
        var headerStyle = {
            textAlign:'center',color:'#fcfefd',
            width: '50%',
            margin: '0px auto 7% auto',
            position:'relative'
        }
        setPosition(modalObj.headerH2,headerStyle);

        var headerElem = createElementFunc('h2',headerStyle,{innerHTML:modalObj.headerH2.content});
        
        var inputStyle = {borderStyle:'none',height:'54px',width:'70%',borderRadius:'7px',padding:'1rem',position:'relative',backgroundColor:'#fcfeff',display: 'block',margin : '0 auto 4.5rem auto'}
        setPosition(modalObj.input,inputStyle);
        var inputElem = createElementFunc('input',inputStyle,{placeholder:'Enter some text...'});
        
        var btnStyle = {borderStyle:'none',position:'relative',color:'#c3c3c3',borderRadius:'7px',backgroundColor:'#484343',width:'50%',height:'50px',display: 'block',margin : '0rem auto 2.5rem auto'}
        setPosition(modalObj.btn,btnStyle);
        var btnElem = createElementFunc('button',btnStyle,{innerHTML:'Submit'});
        
        var footerStyle =  {position:'relative',margin:'5.5rem auto',color:'#f4d7ca',textAlign:'center',width:'44%'}
        footerStyle = setPosition(modalObj.footerP,footerStyle);
        var footerElem = createElementFunc('p',footerStyle,{innerHTML:modalObj.footerP.content});


        modalContentDiv.appendChild(closeSpanElem);
        starGroupDiv.appendChild(leftStarSpanElem);
        starGroupDiv.appendChild(middleStarSpanElem);
        starGroupDiv.appendChild(rightStartSpanElem);
        modalContentDiv.appendChild(starGroupDiv);
        modalContentDiv.appendChild(headerElem);
        modalContentDiv.appendChild(inputElem);
        modalContentDiv.appendChild(btnElem);
        modalContentDiv.appendChild(footerElem);
        
        
        myModalDiv.appendChild(modalContentDiv);
        myModalDiv.style.display = "block";
        document.body.appendChild(myModalDiv);
    }
})();
