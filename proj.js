//التاريخ 

 const d = new Date();
document.getElementById("date").innerHTML = d.toDateString()


class Users{  //انشات كلاس عشان استفيد منه بتسجيل الدخول
  constructor(userName,userEmail,userPassword,userToDo){
      this.name=userName;
      this.email=userEmail;
      this.password=userPassword;
      this.todo=userToDo;
}
}

function newElement(){//انشاء اري فاضيه وبوش لكل انبوت يدخل   //
  let li =document.createElement("li")
  let inputVale =document.getElementById("myInput").value
  li.innerText=inputVale


  arrUll.push(inputVale)
  console.log(arrUll)


  if(inputVale===''){
    alert("You didn't write anything !")
  } else{
    let span2=document.createElement("span")
    span2.setAttribute("class","close")
     span2.innerText="x"
     li.appendChild(span2)
     span2.onclick=function(){
      
       li.style.display = "none";}
    document.getElementById("myUL").appendChild(li)
  }


}


let mylist =document.getElementById("myUL")
let arrUll=[] 
let archives
 
for (let i = 0; i < arrUll.length; i++) {          //اللوب هنا على الاري الفارغه التي تاخذ قيمها من المستخدم
let li =document.createElement("li")
li.innerText=arrUll[i]
  mylist.appendChild(li)
  
   li.appendChild(span2)
   span2.onclick=function(){}
    // arrUll.splice=archives
    // li.style.display = "none";
   
}
