let todos = document.getElementById("myUL");
let listItems = todos.getElementsByTagName("li");
let i;
let count = 0;

// Create a new list item
let newElement = () => {
  let li = document.createElement("li");
  li.id = 'items';
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  li.appendChild(checkBox);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").insertBefore(li,todos.childNodes[0])
  }
  document.getElementById("input").value = "";
  
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
}
// Active function
 uncompletedTasks= ()=> {
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
  alert("reaming Tasks " + count);
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
let time=()=>{
  let time=new Date();
    console.log(time)

}
