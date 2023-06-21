var signuplink = document.querySelector(" .signup");
var signinlink=document.querySelector(".signin");
var signupbutton=document.querySelector(".regset");
var loginbutton=document.querySelector(".login");
//-----------------  signin & signup  tags  ------------------------
var inputname=document.querySelector("#signupname");
var inputEmail=document.querySelector("#email");
var inputPassword=document.querySelector("#password"); 
var inputfalseemail=document.querySelector(".inputfalse"); 



signuplink.addEventListener("click",changelink1);
 function changelink1()
 {
     signinlink.classList.remove("d-none");
     signupbutton.classList.remove("d-none");
     signuplink.classList.add("d-none");
     loginbutton.classList.add("d-none");
     inputname.classList.replace("d-none","d-block");
     parafailed.classList.add("d-none");
     inputfalseemail.classList.add("d-none");
     inputEmpty.classList.add("d-none");
     
  
 }

 var paraSuccess=document.querySelector(".true");

 var container=[];
 signupbutton.addEventListener("click",addregistration)
 function addregistration()
 {
   if(validate()==true)
   {
    regest=
    {
      rname:inputname.value,
      remail:inputEmail.value,
      rpass:inputPassword.value,
    }
    container.push(regest);
    console.log(container);
    localStorage.setItem("addregistration",JSON.stringify(container));
 
    
    paraSuccess.classList.remove("d-none");
    /*
    for(var i=0; i<container.length;i++)
    {
        if(inputname==container[i].rname  && inputEmail.value == container[i].remail && inputPassword.value == container[i].rpass)
        {
          
            alert("this is regest");
            
            
        }
        else
        {
            container.push(regest);
            localStorage.setItem("addregistration",JSON.stringify(container));
          
        }
    }
    
  */

   }
   else
   {
    inputfalseemail.classList.remove("d-none")
    clearall();

   }
 




 }
 var inputEmpty=document.querySelector(".inputempty");

 function clearall()
 {
  if(  inputname.value==""&& inputEmail.value=="" && inputPassword.value=="")
  {
    inputEmpty.classList.remove("d-none")
    inputfalseemail.classList.add("d-none")


  }
    
 }



 if(localStorage.getItem("addregistration")==null)
 {
    container=[];
 }
 else 
 {
    container=JSON.parse(localStorage.getItem("addregistration"));
 }

var mainpage= document.querySelector("#mr");
console.log( mainpage)
var afterdiv= document.querySelector("#afterlogin");
console.log(afterdiv)
var parag=document.querySelector("h3") ;        //.innerHTML="hamada";
console.log(parag)

var parafailed=document.querySelector(".false");
 loginbutton.addEventListener("click", comparedata)

 function comparedata()
 {
    if(validate()==true)
   {
    for(var i=0; i<container.length;i++)
    {
        if(inputEmail.value == container[i].remail && inputPassword.value == container[i].rpass)
        {
          
             mainpage.classList.add("d-none");
            afterdiv.classList.remove("d-none");
            parag.innerHTML="Welcome "+ container[i].rname;
            
            
        }
        else
        {
           parafailed.classList.remove("d-none")
          
        }
    }
   }
   else
   {
    inputfalseemail.classList.remove("d-none")
    clearall();
   }

   
 }
 function validate()
 {
    var regex=/^[A-za-z]+[0-9]*@(gmail|yahoo)\.com$/
    if(regex.test(inputEmail.value) ==true )
    {
        return true;
    }
    else
    {
        return false;
    }
 }





var logout=document.querySelector(".logout ");
logout.addEventListener("click", loginn)
function loginn()
{
    changelink2();
}


















signinlink.addEventListener("click",changelink2);
 function changelink2()
 {
     signuplink.classList.remove("d-none");
     signupbutton.classList.add("d-none");
     loginbutton.classList.remove("d-none");

     signinlink.classList.add("d-none");
     inputname.classList.replace("d-block","d-none");
     paraSuccess.classList.add("d-none");
  
 }