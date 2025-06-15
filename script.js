let btns = document.getElementsByClassName("btn");
let screen = document.getElementById("Screen");
let cut= document.getElementById("cut")
let num="";
let ans=""
let onlyCal=""
let signClicked=false
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(e){
        calculationWithoutEval(e)
        whenClicked(e)
        setTimeout(()=>{
            whenRelease(e)
        },200)
    })
}

function calculationWithoutEval(e){
    if(e.target.id!="cut"){
        num+=e.target.innerHTML
        screen.innerHTML=num
    }
    if(e.target.innerHTML=="CE"){
        screen.innerHTML=""
        num=""
    }
    if(e.target.innerHTML=="+" || e.target.innerHTML=="-" || e.target.innerHTML=="*" || e.target.innerHTML=="/" || e.target.innerHTML=="%"){
        signClicked=true
    }
    if(e.target.innerHTML=="="){
        if(signClicked==true){
            try{
                onlyCal=num.slice(0,num.length-1)
                console.log(onlyCal)
                ans=eval(onlyCal)
                screen.innerHTML=ans
                num=ans
                num=num.toString()
                console.log(num)
                if(num=="0"){
                    num=""
                }
            }
            catch{
                screen.innerHTML='<span style="color:#ED1C24;">Error</span>'
                num=""
            }
            
        }
        else{
            screen.innerHTML=""
            num=""
        }
        signClicked=false
    }
    if(e.target.id=="cut"){
        num=num.slice(0,num.length-1)
        screen.innerHTML=num
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

// function calculationWithoutEval(e){
//     num+=e.target.innerHTML
//     screen.innerHTML=num
    
//     if(e.target.innerHTML=="CE"){
//         screen.innerHTML=""
//         num=""
//     }
//     else if(e.target.innerHTML=="+"){
//         signClicked=true
//     }
//     else if(e.target.innerHTML=="="){
//         if(signClicked==true){
//             splited=num.split("+");
//             console.log(splited);
//             finalNo=splited[splited.length-1]
//             finalNo=finalNo.split("=")
//             ans=(parseInt(splited[0]))+(parseInt(finalNo[0]))
//             screen.innerHTML=ans
//             num=ans
//         }
//         else{
//             screen.innerHTML=""
//             num=""
//         }
//         signClicked=false
//     }
    
// }
