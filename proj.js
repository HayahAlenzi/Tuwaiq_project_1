

const d = new Date();
document.getElementById("date").innerHTML = d.toDateString()

// class Users{  //للوكل ستورق انشات كلاس عشان استفيد منه بتسجيل الدخول
//   constructor(userName,userEmail,userPassword,userToDo){
//       this.name=userName;
//       this.email=userEmail;
//       this.password=userPassword;
//       this.todo=userToDo;
// }
// }

let arrUll=[] 
let archives=[]

function addElement(){//انشاء اري فاضيه وبوش لكل انبوت يدخل   //
  let li =document.createElement("li")
  let inputVale =document.getElementById("myInput").value
  li.innerText=inputVale
  document.getElementById("myUL").appendChild(li)
  arrUll.push(inputVale)
  console.log(arrUll)


  if(inputVale===''){
    alert("You didn't write anything !")
  } else{
      let span2=document.createElement("span")
      span2.setAttribute("class","done")
      span2.innerText="✔"
      li.appendChild(span2)
      span2.addEventListener("click",function(e){
      console.log(inputVale,"inputVale")
      //id go back to it
      //هناك طريقه افضل لازم اعرفها 
      archives.push(inputVale)
      li.style.display = "none";
      //archives[archives.langth-1]
      let ul2=document.getElementById("ul2")
     let li2 =document.createElement("li")
     li2.innerText=archives[archives.length-1]
     ul2.appendChild(li2)
     let span3=document.createElement("span")
     span3.setAttribute("class","close")
     span3.innerText="x"
     li2.appendChild(span3)
     span3.addEventListener("click",function(e){ 
     archives.splice(archives.length-1,1) 
     li2.remove()})
   
  } )

  }
  document.getElementById("myInput").value="" 

}


let mylist =document.getElementById("myUL")

 
for (let i = 0; i < arrUll.length; i++) {          //اللوب هنا على الاري الفارغه التي تاخذ قيمها من المستخدم وتنشا عناصر
      let li =document.createElement("li")
        li.setAttribute("id",i)
        li.innerText=arrUll[i]
        mylist.appendChild(li)
        span2.setAttribute("id",)
        li.appendChild(span2)
        span2.onclick=function(){}
    
        
}


let list = document.querySelector('ul');//يشطب لي على العنصر المحدد
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
                                 }
    }, false);