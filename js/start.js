const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector("#result");
const qNum=document.querySelector('#qNum');
var num=-1;

const EI=document.querySelector('#EI');
const NS=document.querySelector('#NS');
const FT=document.querySelector('#FT');
const PJ=document.querySelector('#PJ');
var mbti='';

function next() { //1번
    var q=document.querySelector('.qBox');
    var qNum=document.querySelector('.qNum');
    var a=document.querySelector('#A');
    var b= document.querySelector('#B');

    console.log(num);
    if(num==13){
        setResult();
        return;
    }
    
    qNum.innerHTML='<h3>Q.'+(num)+'</h3>'
    q.innerHTML=qnaList[num].title;
    a.innerHTML=qnaList[num].A;
    b.innerHTML=qnaList[num].B;
    
    
    var status = document.querySelector('.statusBar');
    status.style.width = (100/12) * (num) + '%';

    
    num++;
 }

 function begin(){
    main.style.display='none';
    qna.style.display='block';
    next();
}

 function answer(){
    var type=qnaList[num].type;
    if (type==='EI'){
        EI.value+=1;
    }
    else if(type==='NS'){
        NS.value+=1;
    }
    else if(type==='FT'){
        FT.value+=1;
    }
    else{
        PJ.value+=1;
    }
    next();
 }

 function setResult(){
        if(EI.value>1){
            mbti+='E'
        }
        else{
            mbti+='I'
        }

        if(NS.value>1){
            mbti+='S'
        }
        else{
            mbti+='N'
        }

        if(FT.value>1){
            mbti+='T'
        }
        else{
            mbti+='F'
        }
        if(PJ.value>1){
            mbti+='P'
        }
        else{
            mbti+='J'
        }
        goResult();

        console.log(mbti);
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
          }, 600);
        }
        

 function goResult(){
    
    var resultIdx=1;
    for(var i=0;i<infoList.length;i++){
        if (infoList[i].type===mbti){
            resultIdx=i;
        }
    }
    descResult(resultIdx);
  }

  function descResult(i){
        const resultName = document.querySelector('.resultname');    
        var resultImg = document.createElement('img');
        const imgDiv = document.querySelector('#resultImg');
        const resultDesc = document.querySelector('.resultDesc');
        resultName.innerHTML = infoList[i].name;
        resultDesc.innerHTML = infoList[i].desc;
        var imgURL = 'img/'+infoList[i].position + '.png';
        resultImg.src = imgURL;
        resultImg.style.width='70%';
        resultImg.style.height='70%';
        resultImg.classList.add('img-fluid');
        imgDiv.appendChild(resultImg);
  }

  function reload(){
    location.reload();
  }