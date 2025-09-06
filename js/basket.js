//פונקצית סל
const basket=()=>{
    let tempBasket=JSON.parse(sessionStorage.getItem("my_basket"));
    let sum=0;
   //יצירת הדיב הגדול
   let x;
   for(let i=0;i<tempBasket.length;i++)
   {if(tempBasket[i].id>0)
 
    {sum+=tempBasket[i].price;
    const item=document.createElement('div');
    item.classList.add(`item${i}`);
    item.classList.add(`item`);
    document.querySelector(".shopping-cart").append(item);
    item.innerHTML=i+1;
    const buttons=document.createElement('div');
    buttons.classList.add(`buttons`);
    buttons.classList.add(`buttons${i}`);
    document.querySelector(`.item${i}`).append(buttons);
    x=document.createElement('div');
    x.classList.add("x");
    document.querySelector(`.buttons${i}`).append(x);
    const heart=document.createElement('div');                                
    heart.classList.add("heart");
    document.querySelector( `.buttons${i}`).append(heart);
    const image=document.createElement('div');
    image.classList.add(`image${i}`);
    document.querySelector(`.item${i}`).append(image);
    const tagImage=document.createElement('img');
    tagImage.classList.add("image");
    document.querySelector(`.image${i}`).append(tagImage);
    tagImage.src=`../images/${tempBasket[i].image}.jpg`
    const description=document.createElement('div');
    description.classList.add("description");
    document.querySelector(`.item${i}`).append(description);
    description.innerHTML=tempBasket[i].description;
    const totalprice=document.createElement('div');
    totalprice.classList.add("total-price");
    document.querySelector(`.item${i}`).append(totalprice);
    totalprice.innerHTML=tempBasket[i].price+' ש"ח'  ;
    x.onclick =()=> Swal.fire({
 
       title: "האם אתה מעוניין להסיר את החבילה מהסל?",
       text: "אתה לא תוכל לשנות את זה",
       icon: "warning",
       showCancelButton: true,
       cancelButtonText: "בטל",
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "כן,הסר!"
     }).then((result) => {
       if (result.isConfirmed) {
         Swal.fire({
           title: "הוסר",
           text: "החבילה הוסרה מהסל",
           icon: "success"
         });
         item.remove();
         sum-=tempBasket[i].price;
         
         ptotalSum.innerHTML='סה"כ: '  +sum+" "+'ש"ח';
         tempBasket.splice(i,1,[0]);
         console.log(tempBasket)
         sessionStorage.removeItem("my_basket");
         sessionStorage.setItem("my_basket", JSON.stringify(tempBasket))
       }
     });
     heart.onclick=()=>{
      heart.style.backgroundImage=`url('../images/heart.jpg')`;
      }
    
 }
   }
   const totalSum=document.createElement('div');
   totalSum.classList.add("totalSum");
   document.querySelector("body").append(totalSum);
   const ptotalSum=document.createElement('span');
   ptotalSum.classList.add("ptotalSum");
   document.querySelector(".totalSum").prepend(ptotalSum);
   ptotalSum.innerHTML='סה"כ: '  +sum+" ";
   ptotalSum.innerHTML+='ש"ח' ;
  const buttonPay=document.createElement('a');
   buttonPay.classList.add("btn-23");
   document.querySelector(".totalSum").append(buttonPay);
   buttonPay.innerHTML=`<span class="text"> לביצוע הזמנה </span>
   <span aria-hidden="" class="marquee">הזמן כעת</span>`;

  //  const buttonPayy=document.createElement('a');
  //  buttonPayy.classList.add("btn2");
  //  document.querySelector(".buttonPay").append(buttonPayy);
  //  const buttspan=document.createElement('span');
  //   buttspan.classList.add("spn2");
  //   document.querySelector(".buttonPayy").append(buttspan);
  //   buttspan.innerHTML='למעבר להזמנה';
   buttonPay.setAttribute('href', `orderForm.html`);
   sessionStorage.setItem("sum",JSON.stringify(sum));
 }//פופאפ
 basket();
 const invest=document.createElement('div');
 invest.classList.add("invest");
 document.querySelector("body").prepend(invest);
 
 let timer=setTimeout(()=>{
   invest.style.display="block";
 },4000);
 let timerstop=setTimeout(()=>{
  invest.style.display="none";
 },8000);