//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//document.all[10].textContent="";
//console.log(document.all[10]);
//console.log(document.all[11]);
//console.log(document.all);
//document.all[6].textContent="Not todos"
// var newone = document.getElementById('myUL');
// newone.textContent=5;
// console.log(document.all);
// console.log(document.all.myUL);








 
 
 // To Delete list items
 var close = document.getElementsByClassName("close");
 
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
    
     div.style.display = "none";
   }
 }
 //Clear the list i-e Delete all list items
 function function1(){
     var li=document.querySelectorAll('li');
     for(var k=0 ; k<li.length ; k++)
     {
         li[k].style.display='none';
     }
 }

 

 
   



 
 // Create a new list item
 function newElement() {
   var li = document.createElement("li");
   li.className='li';
   var inputValue = document.getElementById("input").value;
   var t = document.createTextNode(inputValue);
   
         li.appendChild(t);
   if (inputValue === '') {
     alert("You must write something!");
   } else {
     document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("input").value = "";
   
 
   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 }
/////complete function



function fun3() {
  var x = document.getElementById("myUL");
  var y = x.getElementsByTagName("li");
  var i;
  for (i = 0; i < y.length; i++) {
    console.log[i];

    if (y[i].classList.toggle('checked') == true) {

      y[i].style.display = 'none';
    }

  }
}

/////complete function
function complete() {  
 
  var ul = document.getElementById("myUL");
  var listItem = ul.getElementsByTagName("li");
  for(let i=0 ; i< listItem.length ; i++)
  {
    let item=listItem[i].childNodes[1].checked;
    if(item != true)
    {
      listItem[i].style.display="none";
    }
    else {
      listItem[i].style.display = "block";
    }
    
  }
}
/////// Active function
function activefun() {  
  var ul = document.getElementById("myUL");
  var listItem = ul.getElementsByTagName("li");
  for(let i=0 ; i< listItem.length ; i++)
  {
    let item=listItem[i].childNodes[1].checked;
    if(item === true)
    {
      listItem[i].style.display="none"; 
    }
    else {
      listItem[i].style.display = "block";
    }
    
  }
}


 
