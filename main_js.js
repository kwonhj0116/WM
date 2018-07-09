window.onload = function(){
    let submitClicked = document.getElementById('clickEvent');
    submitClicked.addEventListener("click", sendIt, false);
}
function sendIt(){
    let f = document.myForm;
    //let f = document.forms[0] 
    //form 이름으로 접근하는 방법. 폼까지만 접근이 가능하고, myForm.id이런식은 불가능
    if(! f.id.value){
        alert('insert the id');
        f.id.focus();
        return;
    }
    if(f.id.value.length<5 || f.id.value.length>15){
        alert('limit: 5~15');
        f.id.focus();
        return;
    }
    if(! f.age.value){
        alert('put the age');
        f.age.focus();
        return;
    }
    if(isNaN(f.age.value)){
        alert('put the number in age block');
        f.age.focus();
        return;
    }
    let age = parseInt(f.age.value);  
    if(age<18){
        alert('미성년자');
        return;
    }
    if(! f.hak.value){
        alert('학력선택');
        f.hak.focus();
        return;
    }
    let n = 0;
    for(let i=0, len = f.hobby.length; i<len; i++){
        if(f.hobby[i].checked){
            n++;
        }
    }
    if(n==0){
        alert('취미 선택');
        f.hobby[0].focus();
        return;
    }
    alert('END');
}