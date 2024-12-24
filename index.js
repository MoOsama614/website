const search = document.querySelector(".search");
const headersearch = document.querySelector(".header-search");
const maindiv = document.querySelector(".header-search-content");
const menu = document.querySelector(".menu");
const menucontent = document.querySelector(".menu-content");
const headerLanguage = document.querySelector(".header-language");
const headerLanguageList = document.querySelector(".header-language-list");
const headerLanguageOptinos = document.querySelectorAll(".header-language-list p");
const mainHead = document.querySelector(".body h2");
const mainParagraph = document.querySelector(".body p");

console.log(maindiv);
console.log(headersearch);


console.log(search);
search.addEventListener("click" ,() => {
maindiv.classList.toggle("show");
 });


menu.addEventListener("click" ,() => {
menucontent.classList.toggle("show");
 });


    headerLanguage.addEventListener("click" ,() => {
    headerLanguageList.classList.toggle("show");
 });


       headerLanguageOptinos.forEach((e)=>{
        e.addEventListener("click" , (ele)=> {
        console.log(ele.currentTarget);
        console.log(ele.currentTarget.textContent === "Arabic");
        
        if (ele.currentTarget.textContent === "Arabic") {
            mainHead.textContent = "مرحبا في موقعي";
            mainParagraph.textContent = "انا مهندس مصطفي مطور واجهات باستخدام الريأكت"
        }
        else {
             mainHead.textContent = "welcome to my website ";
            mainParagraph.textContent = "i am engineer mostafa i am a web developer react "
        }
        

    })
    
 })
