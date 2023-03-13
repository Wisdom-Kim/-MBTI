const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
var num=1;

const EI=document.querySelector('#EI');
const NS=document.querySelector('#NS');
const FT=document.querySelector('#FT');
const PJ=document.querySelector('#PJ');

function next() { //1번
    var q=document.querySelector('.qBox');
    var a=document.querySelector('#A');
    var b= document.querySelector('#B');
    q.innerHTML=qnaList[num].title;
    a.innerHTML=qnaList[num].A;
    b.innerHTML=qnaList[num].B;
    num++; //6번
    
    if(num==13){
        result();
    }
 }

 function begin(){
    main.style.display='none';
    qna.style.display='block';
    next();
}

 function answer(C){
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

 function result(){
    var mbti='';
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

        console.log(mbti);
 }