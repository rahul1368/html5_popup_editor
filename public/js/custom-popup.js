(function(){
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyUrl + 'http://15.206.195.65/api/v1/items/', {
        method: 'get',headers:{"Accept":"application/json","Access-Control-Allow-Origin":"['*']"},
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        var modalChangesObj = {};
        if(response instanceof Array && response.length > 0){
            for (const item of response) {
                modalChangesObj[item.title] = {
                    top:item.top,left:item.left,content:item.content
                }
            }
        }
        createCustomPopup(modalChangesObj);
    }).catch(function(err) {
        console.log(err);
    });
    /** Create custom popup */

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
    
    function setPosition(src,dest){
        if(src.top != '0px'){
            dest.top = src.top;
        }
        if(src.left != '0px'){
            dest.left = src.left;
        }
        return dest;
    }
    function createCustomPopup(modalObj){
        var myModalDiv = createElementFunc('div',{
            display: 'block',
            position: 'relative',
            zIndex: '1',
            left: '0',
            top: '0',
            overflow: 'auto',
            backgroundColor: 'rgb(0,0,0)', 
            backgroundColor: '#df7a5f', 
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            border: '10px solid #ffffff',
            margin: '0 auto'
        
        },{className:'modal',id:'myModal1'});
        var modalContentDiv = createElementFunc('div',{
            backgroundColor: modalObj.modalContentbgColor.content,
            margin: '0% auto',
            width: '550px',
            height:'550px',
            borderRadius:'50%',
            // border: 'none !important',
            border: '10px solid #ffffff',

        },{className:'modal-content',id:'customModalContentDiv'});
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
        },{innerHTML:'x',id:'customPopUpClose'});
        closeSpanElem.onclick = function(){
            document.getElementById('customModalContentDiv').style.display = 'none';
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
        
        var inputStyle = {height:'54px',width:'70%',borderRadius:'7px',padding:'1rem',position:'relative',backgroundColor:'#fcfeff',display: 'block',margin : '0 auto 8.5rem auto'}
        setPosition(modalObj.input,inputStyle);
        var inputElem = createElementFunc('input',inputStyle,{placeholder:'Enter some text...'});
        
        var btnStyle = {position:'relative',color:'#c3c3c3',borderRadius:'7px',backgroundColor:'#484343',width:'50%',height:'50px',display: 'block',margin : '0rem auto 2rem auto'}
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
        //myModalDiv.appendChild(modalContentDiv);

        document.body.appendChild(modalContentDiv);
    }
})();
