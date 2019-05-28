let todos = document.getElementById("myUL");
  let listItems = todos.getElementsByTagName("li");
  let i;
  let count = 0;
// Create a "close" button 
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item
let newElement = () => {
  let li = document.createElement("li");
  li.id = 'items';
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let date = document.createElement("text");
  let time = new Date();
  date.innerHTML = time;
  date.style.margin = "12px";
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.appendChild(checkBox);
  li.appendChild(date);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span)
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//complete function
let completedTasks= ()=> {
  for(i = 0; i < listItems.length; i++) {
    let itemChecked = listItems[i].childNodes[1].checked;
    if (itemChecked != true) {
      listItems[i].style.display = "none";
    }
    else {
      listItems[i].style.display = "block";
      count = count + 1;
    }
  }
  alert("items completed " + count);
}
// Active function
let  uncompletedTasks= ()=> {
  let count=0;
  for(i = 0; i < listItems.length; i++) {
    let itemChecked = listItems[i].childNodes[1].checked;
    if (itemChecked === true) {
      listItems[i].style.display = "none";
    }
    else {
      listItems[i].style.display = "block";
      count = count + 1;
    }
  }
  alert("reamaining tasks " + count);
}

//show all function
let showAllToDos = ()=> {
  for(i = 0; i < listItems.length; i++) {
    listItems[i].style.display = "block"
  }
}

//clear completed tasks
let clearCompletedTasks = ()=> {
  for(i = 0; i < listItems.length; i++) {
    let itemChecked = listItems[i].childNodes[1].checked;
    if (itemChecked === true) {
      listItems[i].remove();
      i--; 
    }
  }
}
