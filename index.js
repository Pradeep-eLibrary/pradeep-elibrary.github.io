//? navbar scroll
/* let bar=document.querySelector(".navbar-toggler");
bar.addEventListener("click",()=>{
   let navList=document.querySelector(".navbar-collapse");
   navList.classList.toggle("example");
});
  
 */

//? animating the text color 
setInterval(()=>{
   let para=document.querySelector(".spanText");
   para.classList.toggle("aniText");
   
},3000)

setInterval(()=>{
    let brand=document.querySelector(".brand1");
    
    brand.classList.toggle("brand2");
    let navAni=document.querySelector(".navbar-brand");
    navAni.classList.toggle("navbar-brandAni")
  
    
   },2000)

//? scroll up the arrow mark to show the collection of books

setInterval(()=>{
   let scrollUp=document.querySelector(".scroll-up");
   scrollUp.classList.toggle("scroll-ups");

},300)

