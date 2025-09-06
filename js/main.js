


//בנאי של משתמש
function user(name,firstName,lastName,sisma,address,city,country,email,card){
    this.name=name;
    this.firstName=firstName;
    this.lastName=lastName;
    this.sisma=sisma;
    this.address=address;
    this.city=city;
    this.country=country;
    this.email=email;
    this.card=card
    }
    
    //הכנסת שם משתמש
    const use=async function getUserInput(str) {
      let ifWas=JSON.parse( sessionStorage.getItem("ifWas"));
      if(ifWas==null)
      {sessionStorage.setItem("ifWas",JSON.stringify(false))
      ifWas=JSON.parse( sessionStorage.getItem("ifWas"));
      }
      if(ifWas==false)
       { sessionStorage.setItem("ifWas",true)
        const { value: formValues } = await Swal.fire({
           title: str,
           html: `
               <input placeholder="        הכנס שם         " id="swal-input1" class="swal2-input">
               <input placeholder="       הכנס סיסמה" id="swal-input2" class="swal2-input">
           `,
           focusConfirm: false,
           preConfirm: () => {
               return [
                   document.getElementById('swal-input1').value,
                   document.getElementById('swal-input2').value
               ];
           }
       });
    
       console.log("הנתונים שהמשתמש הזין:", formValues);
       let newUser=new user(formValues[0],null,null,formValues[1],null,null,null,null,null);
       sessionStorage.setItem("currentUser",JSON.stringify(newUser))
      let tempUsers=JSON.parse(localStorage.getItem("users"));
       if(tempUsers)
      { const ifExists=tempUsers.findIndex(value=>{
         return value.name==newUser.name&&value.sisma==newUser.sisma;
       })
       if(ifExists==-1){
        tempUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(tempUsers))
       
     
     }}
       else{
            tempUsers=[];
            tempUsers.push(newUser);
         localStorage.setItem("users", JSON.stringify(tempUsers))
       }
        location.reload();
    } 
    }

    // //פונקציה שמוחקת את כל האלמנטים שבעמוד
    // const deletePage=()=>{
    //  const b = document.querySelector("body");
    // while (b.hasChildNodes()) {
    //    if(b.firstChild==b.lastChild)
    //    break;
    //   b.removeChild(b.lastChild);
    // }
    // }
    //בנאי של מוצר
    //מערך מוצרים סל
    //let basketProducts=[];

    const updateProduct=()=>{
    const tempProduct= JSON.parse(localStorage.getItem("products"));
    const tempBasket= JSON.parse(sessionStorage.getItem("my_basket"));
    for(let i=0;i<tempBasket.length;i++){
    //   const thisProduct=tempProduct.findIndex(value=>)
    }
    }
   
    use("wellcome");
    
const nav_up =()=>{
    //יצירת הדיב העליון
    const header=document.createElement('div');
    header.classList.add("header");
    document.querySelector("body").prepend(header);
    //יצירת הלוגו
    const logo=document.createElement('img');
    logo.src=`../images/logo.png`
    logo.classList.add("logo");
    document.querySelector(".header").append(logo);
    const my=document.createElement('div');
    my.classList.add("my");
    document.querySelector(".header").append(my);
    const my_name=document.createElement('span');
    my_name.classList.add("my_name");
    document.querySelector(".header").append(my_name);
    const p= JSON.parse(sessionStorage.getItem("currentUser")); 
    if(p!=null){
      const k=p.name;
      my_name.innerHTML="שלום ";
      my_name.innerHTML+=k;
    }
    
    //יצירת סיווגים
   

    const about=document.createElement('a');
    about.classList.add("about");
    document.querySelector(".header").prepend(about);
    about.innerHTML=`טופס החזרה`;
    const galery=document.createElement('a');
    galery.classList.add("galery");
    document.querySelector(".header").prepend(galery);
    galery.innerHTML=`גלריות`;
    galery.setAttribute('href', `../html/galery.html`);

    const home=document.createElement('a');
    home.classList.add("home");
    document.querySelector(".header").prepend(home);
    home.innerHTML=`דף הבית`;
    home.setAttribute('href', `../html/project.html`);
    
   

    
    about.onclick=()=>{
      
        const curUser=sessionStorage.getItem("currentUser");
        if (curUser==null){
          
          function d(){ Swal.fire("SweetAlert2 is working!")}
          d();
           let ifitwas=JSON.parse(sessionStorage.getItem("ifwas"));
            ifitwas=false;
            sessionStorage.setItem("ifWas",JSON.stringify(ifitwas))
            use("שמך לא קיים במערכת <br> נא הכנס שם וסיסמה");
        }
        else{
        const returns=document.createElement('div');
        returns.classList.add("returns");
         document.querySelector("body").prepend(returns);
        //  const x=document.createElement('div');
        //  x.classList.add("x");
        //   document.querySelector(".returns").prepend(x);
        //טופס החזרה
         const cancel=document.createElement('div');
         cancel.classList.add("cancel");
        returns.prepend(cancel);
         returns.style.display="block";
        returns.innerHTML=`
        <span>כמה מילים ...</span><br>
        <textarea class="tdyp" name="my" id="" cols="20" rows="3"></textarea><br>
        <div class="icon"></div>
        <input class="id" placeholder="הכנס קוד חבילה   "><br>
        <span class="matzir">    אני מצהיר/ה בזאת    <br>שכל האבזרים ללא שום פגם</span>
        <br><br><button class="submit" type="submit">להחזרה</button><br><br>
        `
        const x=document.createElement('div');
        x.classList.add("x");
        document.querySelector(`.returns`).append(x);
        x.onclick=()=>{
          returns.style.display="none";
        }
        document.querySelector(".submit").onclick=()=>{
          console.log(document.querySelector(".tdyp").value)
          
         
        const codeProduct= document.querySelector(".id").value;
       const tempProduct= JSON.parse(localStorage.getItem("products"));
       const ind= tempProduct.findIndex(value=>{
        return value.id==codeProduct;
       })
        if(tempProduct[ind])
       {if(tempProduct[ind].amount>=1)
        // alert();
         document.querySelector(".id").value="לא שכרת מוצר זה!";
         else{
          const laod=document.createElement('div');
          laod.classList.add("loader");
          document.querySelector(".returns").append(laod);
          setTimeout(function(){
            returns.style.display="none";
            //???????????????????????????????????????????????????????????????????????????
            location.reload();
          },3000);
         
      tempProduct[ind].amount++;
      localStorage.setItem("products",JSON.stringify(tempProduct));
     }
     }
      else{
        document.querySelector(".id").value="לא קיים מוצר כזה!"
      }
      }
      returns.onmouseenter=()=>{
        returns.style.display="block"
      }
      // document.querySelector(".returns").childNodes.onclick=()=>{
      //   alert();
      //   returns.style.display="none"
      // }
    }   
    }
    const basket=document.createElement('a');
    basket.classList.add("basket");
    document.querySelector(".header").prepend(basket);
    basket.innerHTML=`הסל שלי`;
    basket.setAttribute('href', `../html/basket.html`);
    

    };


  
  
    
   
  