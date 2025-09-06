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


   $.ajax({
      url: "./Data/allProduct.json",
      success: (Data) => {
         try{
            categories(Data);
         }
        catch{
           alert(error);
        }
      }
  });

   const tempProduct=localStorage.getItem("products")
   if(tempProduct==null)  
    localStorage.setItem("products",JSON.stringify(products));
    var showDetails;
   const categories=(Data)=>{
   const strParam = location.search;
   const searchParams = new URLSearchParams(strParam)
   const cat = searchParams.get("category")
   createTitle(cat,cat);
   const productss=JSON.parse(localStorage.getItem("products"))
   const filterProduct=productss.filter(function(value){if(value.type==cat)return value })
   console.log(filterProduct);
   const productContainer=document.createElement('div');
   productContainer.classList.add("productContainer");
   document.querySelector("body").append(productContainer);
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
       showDiscreption.innerHTML+=`<br/><br/><div class="finish">מושכר כעת<div/>`;
      }
   }

}
