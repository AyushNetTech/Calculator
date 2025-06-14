let btns = document.getElementsByClassName("btn");
let screen = document.getElementById("Screen");
let num="";
let splited=""
let finalNo=""
let ans=""
let signClicked=false
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(e){
        calculation(e);
        whenClicked(e)
        setTimeout(()=>{
            whenRelease(e)
        },200)
    })
}

function calculation(e){
    num+=e.target.innerHTML
    screen.innerHTML=num
    
    if(e.target.innerHTML=="CE"){
        screen.innerHTML=""
        num=""
    }
    else if(e.target.innerHTML=="+"){
        signClicked=true
    }
    else if(e.target.innerHTML=="="){
        if(signClicked==true){
            splited=num.split("+");
            console.log(splited);
            finalNo=splited[splited.length-1]
            finalNo=finalNo.split("=")
            ans=(parseInt(splited[0]))+(parseInt(finalNo[0]))
            screen.innerHTML=ans
            num=ans
        }
        signClicked=false
    }
    
}

function whenClicked(e){
    e.target.style.background="linear-gradient(315deg, #cacaca, #f0f0f0)";
    e.target.style.boxShadow =" -5px -5px 7px #b8b8b8,5px 5px 7px #ffffff";
}

function whenRelease(e){
    e.target.style.background="#e0e0e0"
    e.target.style.boxShadow ="-7px -7px 14px #c3c3c3,7px 7px 14px #fdfdfd";
}