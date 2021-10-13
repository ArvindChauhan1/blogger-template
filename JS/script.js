const menu = document.querySelector('#menu-list');
const icon =  document.querySelector('#icon');

icon.addEventListener("click",()=>{
    menu.classList.toggle("active");
    if(icon.classList[1]=='fa-bars'){
        icon.classList.replace('fa-bars','fa-xmark');
    }else{
        icon.classList.replace('fa-xmark','fa-bars');
    }
})
