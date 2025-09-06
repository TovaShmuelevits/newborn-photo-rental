//טופס הזמנה
const thisUser= JSON.parse(sessionStorage.getItem("currentUser"));
const tempUsers=JSON.parse(localStorage.getItem("users"));

const ifSimiliarUser=()=>{
    
    let findUser=null;
    if(thisUser!=null)
    { findUser=tempUsers.findIndex(value=>{
     return value.name==thisUser.name&&value.sisma==thisUser.sisma;
    });
    }
    if(!(findUser==null||tempUsers[findUser].name==null)){
     document.querySelector(".name").defaultValue=`${tempUsers[findUser].name} `
    }
    if(!(findUser==null||tempUsers[findUser].address==null)){
        document.querySelector(".address").defaultValue=`${tempUsers[findUser].address} `
    }
    if(!(findUser==null||tempUsers[findUser].city==null)){
        document.querySelector(".city").defaultValue=`${tempUsers[findUser].city} `
    }
    if(!(findUser==null||tempUsers[findUser].email==null)){
        document.querySelector(".email").defaultValue=`${tempUsers[findUser].email} `
       }
    if(!(findUser==null||tempUsers[findUser].card==null)){
        document.querySelector(".card").defaultValue=`${tempUsers[findUser].card} `
    }
    if(!(findUser==null||tempUsers[findUser].lastName==null)){
        document.getElementById("lastName").defaultValue=`${tempUsers[findUser].lastName} `
    }
    if(!(findUser==null||tempUsers[findUser].firstName==null)){
        document.getElementById("firstName").defaultValue=`${tempUsers[findUser].firstName} `
    }
    if(!(findUser==null||tempUsers[findUser].country==null)){
        document.getElementById("country").defaultValue=`${tempUsers[findUser].country} `
    }
    }
   ifSimiliarUser();
   //פונקציה ששומרת נתונים
   const saveInfo=()=>{
    
    const checkbox=document.getElementById("save-info");
    if(checkbox.checked==true)
   {
    let findind=tempUsers.findIndex(value=>{
    return value.name==thisUser.name&&value.address==thisUser.address;
    });
    
    if(findind!=-1)
        {
            tempUsers[findind].firstName=document.getElementById("firstName").value;
            tempUsers[findind].lastName=document.getElementById("lastName").value;
            tempUsers[findind].address=document.querySelector(".address").value;
             tempUsers[findind].city=document.querySelector(".city").value;
            tempUsers[findind].email=document.querySelector(".email").value;
            tempUsers[findind].card=document.querySelector(".card").value;
            tempUsers[findind].country=document.getElementById("country").value;
            
            
        }
        else{
            tempUsers.push(new user(document.querySelector(".name").value,document.getElementById("firstName").value,
            document.getElementById("lastName").value,null,document.querySelector(".city").value,document.getElementById("country").value
        ,document.querySelector(".email").value,document.querySelector(".card").value))
        }
        localStorage.setItem("users",JSON.stringify(tempUsers));
   };
   }
   //פונקציה שמורידה מהמלאי את המוצרים שנלקחו
   const updateProducts=()=>{
   
    const tempBasket=JSON.parse( sessionStorage.getItem("my_basket"));
    const tempProducts=JSON.parse(localStorage.getItem("products"));
    debugger
    tempBasket.forEach(element => {
       const sameInd= tempProducts.findIndex(value=>{
            return element.id==value.id;
        });
        if(sameInd!=-1)
        tempProducts[sameInd].amount--;

    });
    localStorage.setItem("products",JSON.stringify(tempProducts));
    sessionStorage.setItem("my_basket","");
   }
   document.querySelector(".bigButton").onclick=()=>{
    const checkFirstName=/^[a-zA-Zא-ת]+$/;
    if(checkFirstName.test(document.querySelector("#firstName").value))
    {alert();}
    updateProducts();
    saveInfo();
   }
  document.querySelector(".payied").innerHTML+=" "+JSON.parse(sessionStorage.getItem("sum"))+` ש"ח`;
   