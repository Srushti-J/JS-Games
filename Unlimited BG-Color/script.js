const RandomColor = function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalID;
const changeBgColor = function(){
    document.body.style.backgroundColor = RandomColor();
}
const startChangingColor = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor,1000);
    }
}
const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
}

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);

function addClickEffect(btn){
    btn.addEventListener('mousedown',()=>{
        btn.style.transform='scale(1.1)';
    });
    btn.addEventListener('mouseup',()=>{
        btn.style.transform='scale(1)';
    });
    btn.addEventListener('mouseleave',()=>{
        btn.style.transform='scale(1)';
    });
}
addClickEffect(start);
addClickEffect(stop);
