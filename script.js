console.log("script running")
document.querySelector('.cross').style.display='none';
document.querySelector('.menu-bar').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menu').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.menu').style.display='none'
        setTimeout(() =>{
        document.querySelector('.cross').style.display='inline'
    },350);
}
})
 

function seterror(id,error){
//sets error inside tag of id
element=document.getElementById(id);
element.getElementByClassName('formerror')[0].innerHTML =error;
}

function validateForm(){
    var returnval =true;

    //perform vaidation nad if validation fails,set the value of returnval
    var name=documnet.forms['myForrm']['fname'].value;
    if(name.length<5){
       seterror("name","*Length of name is too short") ;
       returnval =false;
    }

    if(name.length==0){
        seterror("name","*Length of name cannot be zero") ;
        returnval =false;
     }
    
    return returnval;
}