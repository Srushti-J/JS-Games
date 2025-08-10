const form=document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#Height').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#result');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`${height} is not  a valid height`;
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`${weight} is not  a valid height`;
    }else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);
       result.innerHTML=`<span>${bmi}</span>`;
    const bmiVal=parseFloat(bmi);
     const result2=document.querySelector('#result2');
     if(bmiVal<18.6){
        result2.innerHTML=`<span>UnderWeight</span>`;
     }else if(bmiVal>=18.6 && bmiVal<=24.9){
        result2.innerHTML=`<span>Normal Range</span>`;
     }else{
        result2.innerHTML=`<span>OverWeight</span>`;
     }
    }
});
