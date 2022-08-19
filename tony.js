
 
 const icon = document.querySelector(".icon");
 const menu = document.querySelector(".menu");
 const body = document.querySelector(" body");

 
icon.addEventListener("click" , () =>{



    icon.classList.toggle ("change");
    menu.classList.toggle ("changee");
    body.classList.toggle ("bgcolor");
 
} );

const fet = document.querySelector(".fet")
const fett = document.querySelector(".fett")
const features = document.querySelector(".features")
 
const company = document.querySelector(".company")
const rot = document.querySelector(".rot")
const rott = document.querySelector(".rott")


fet.addEventListener("click", () =>{

features.classList.toggle("active");
rot.classList.toggle("activ")
 })

 fett.addEventListener("click", () =>{

    company.classList.toggle("active");
    rott.classList.toggle("activ")
     }) ;

 
     const lear = document.querySelector(".learn");

     lear.addEventListener("click", () =>{

        lear.classList.toggle("iamthe");
       
         }) ;
    