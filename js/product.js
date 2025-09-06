//עמוד מוצר
const productt=()=>{
    const strParam = location.search;
    const searchParams = new URLSearchParams(strParam);
    const productId = searchParams.get("id");
    const products=JSON.parse( localStorage.getItem("products"));
    let p=products.findIndex(function(value){
       if(value.id==productId)
       return value;
    })
    const containPicture=document.createElement('div');
    containPicture.classList.add("containPicture");
    document.querySelector("body").append(containPicture);
    const Picture=document.createElement('div');
    Picture.classList.add("Picture");
    document.querySelector(".containPicture").prepend(Picture);
    Picture.style.backgroundImage=`url('../images/${products[p].image}.jpg')`;
    const productDetails=document.createElement('div');
    productDetails.classList.add("productDetails");
    document.querySelector(".containPicture").append(productDetails);
   ///כפתור הוספה לסל
    const addToBasket=document.createElement('button');
    addToBasket.classList.add("button-57");
    document.querySelector(".productDetails").prepend(addToBasket);
    const spanAddToBasket=document.createElement('span');
    document.querySelector(".button-57").prepend(spanAddToBasket);
    spanAddToBasket.innerHTML=" הוספה לסל";
    const sspanAddToBasket=document.createElement('span');
    document.querySelector(".button-57").append(sspanAddToBasket);
    sspanAddToBasket.innerHTML='בהזמנה מעל 150 ש"ח משלוח עד הבית חינם!!!!'
   ///דיב תאור המוצר
   const discreptionProduct=document.createElement('div');
   discreptionProduct.classList.add("discreptionProduct");
   document.querySelector(".productDetails").append(discreptionProduct);
   const spanDiscreptionProduct=document.createElement('span');
   document.querySelector(".discreptionProduct").append(spanDiscreptionProduct);
   spanDiscreptionProduct.innerHTML=`${products[p].description}`;
    //דיב מה קיים במוצר
   const whatExistsProduct=document.createElement('p');
   whatExistsProduct.classList.add("whatExistsProduct");
   document.querySelector(".productDetails").append(whatExistsProduct);
   const spanWhatExistsProduct=document.createElement('p');
   document.querySelector(".whatExistsProduct").append(spanWhatExistsProduct);
   spanWhatExistsProduct.innerHTML="מה יש בחבילה?";
    //מפריד את כל הפריטים
     let temp2='';
     let temp3;
     let temp1=products[p].what;
     while(temp1!=''){
       temp3=temp1.search('=');
       temp2=temp1.substring(0,temp3)
       whatExistsProduct.innerHTML+='✔ '+temp2+'<br/>';
       temp1=temp1.substring(temp3+1);
    }
    const productPrice=document.createElement('p');
    productPrice.classList.add("productPrice");
    document.querySelector(".productDetails").append(productPrice);
   
    productPrice.innerHTML+=" מחיר השכרה: "+`${products[p].price}`+' ש"ח';
    productPrice.innerHTML+=`<br>`;
 
 
    addToBasket.onclick= ()=>{
      if(products[p].amount>0)
      {//אלרט של המוצר נוסף בהצלחה
       const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            const basketStr=sessionStorage.getItem("my_basket");
    let b;
    //הוספת המוצר לסל שבגייסון
       if(basketStr)
       b=JSON.parse(basketStr)
       else
       b=[];
       b.push(products[p]);
       sessionStorage.setItem("my_basket", JSON.stringify(b))
          }
        });
        //המשך של האלרט
        Toast.fire({
          icon: "success",
          title: "המוצר התווסף לסל"
        });
    
    }
    else{
      Swal.fire("חבילה זו מושכרת כעת!!!");
      
    }
 }
}
 productt();