 //פונקציה שיוצרת את div הכותרת
 const createTitle=(img,written)=>{
    const galeryTitle=document.createElement('div');
    galeryTitle.classList.add("galeryTitle");
    document.querySelector("body").append(galeryTitle);
    galeryTitle.style.backgroundImage=`url('../images/${img}2.jpg')`;
    //כיתוב בכותרת הגלריה
    const spanNewBorn=document.createElement('span');
    spanNewBorn.classList.add("spanNewBorn");
    document.querySelector(".galeryTitle").append(spanNewBorn);
    spanNewBorn.innerHTML='New Born'
    const spanCategory=document.createElement('span');
    spanCategory.classList.add("spanCategory");
    document.querySelector(".galeryTitle").append(spanCategory);
    if(written=='boys')
    spanCategory.innerHTML='בנים';
    else {if(written=='גלריה')spanCategory.innerHTML='גלריה'
         else {if(written=='twins')spanCategory.innerHTML='תאומים'
               else spanCategory.innerHTML='בנות'}}
 }
 let count=0;
// על גלריה פונקציה שתקרה בעת לחיצה  
const mySearch=()=>{

   const containsearch=document.createElement('div');
   containsearch.classList.add("containsearch");
   document.querySelector(`body`).append(containsearch);
   
   // containsearch.innerHTML+=` <p class="animate__animated animate__backInRight">להתאמה מושלמת...</p>`
   containsearch.innerHTML+=`  <input class="search" type="text" name="search" placeholder="חיפוש...">`;
   const search=document.querySelector(".search");
    const productss=JSON.parse(localStorage.getItem("products"))
    const productContainer=document.createElement('div');
   productContainer.classList.add("productContainer");
   document.querySelector("body").append(productContainer);
    search.oninput=()=>{
      document.querySelector(".optionContainer").style.display="none";
        count++;
      while (productContainer.hasChildNodes()) {
        productContainer.removeChild(productContainer.firstChild);
    
     }
      const str=search.value;
      const filterProduct=productss.filter(function(value){if(((value.what).indexOf(str)!=-1)||((value.description).indexOf(str)!=-1))return value })
      
  
   for(let i=0;i<filterProduct.length;i++)
    { //
     
      //יצירת כל הדיוים
      const divProduct=document.createElement('a');
      divProduct.classList.add("divProduct");
      document.querySelector(".productContainer").prepend(divProduct);
      divProduct.setAttribute('href', `product.html?id=${filterProduct[i].id}`);
      //יצירת התמונה
      const ProductPicture=document.createElement('div');
      ProductPicture.classList.add("ProductPicture");
      document.querySelector(".divProduct").prepend(ProductPicture);
      ProductPicture.style.backgroundImage=`url('../images/${filterProduct[i].image}.jpg')`;
      //יצירת פרטי המוצר
      const showDiscreption=document.createElement('span');
      document.querySelector(".ProductPicture").append(showDiscreption);
      showDiscreption.innerHTML=`<strong>- מק"ט: ${filterProduct[i].id} -</strong> <br/><br/>${filterProduct[i].description}<br/><br/>מחיר: ${filterProduct[i].price}`;
      showDiscreption.innerHTML+=' ש"ח';
      
      if(filterProduct[i].amount<=0){
       showDiscreption.innerHTML+=`<br/><br/><div class="finish">מושכר כעת<div/>`
      }
   } 
     
     const body=document.querySelector("body");
     if(count==1)
     {
      body.removeChild(body.lastChild);
      }
    
    }

 }

 createTitle("girls","גלריה");
 mySearch();
const galeryOnclick=()=>{
   
    // createTitle("galery","גלריה");
    //מיכל האופציות
    const optionContainer=document.createElement('div');
    optionContainer.classList.add("optionContainer");
    document.querySelector("body").append(optionContainer);
 
    //בנים
    const boys=document.createElement('a');
    boys.classList.add("boys");
    document.querySelector(".optionContainer").prepend(boys);
    boys.setAttribute('href', 'products.html?category=boys');
   //בנות
    const girls=document.createElement('a');
    girls.classList.add("girls");
    document.querySelector(".optionContainer").prepend(girls);
    girls.setAttribute('href', 'products.html?category=girls');
    //תאומים
    const twins=document.createElement('a');
    twins.classList.add("twins");
    document.querySelector(".optionContainer").prepend(twins);
    twins.setAttribute('href', 'products.html?category=twins');
 } 

 galeryOnclick();
 const invest=document.createElement('div');
 invest.classList.add("invest");
 document.querySelector("body").prepend(invest);
 
 let timer=setTimeout(()=>{
   invest.style.display="block";
 },4000);
 let timerstop=setTimeout(()=>{
  invest.style.display="none";
 },8000);

 
