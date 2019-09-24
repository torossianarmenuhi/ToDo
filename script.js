// <div class="flex-container todoItems">
//   <div class="itemRow">
//     <div class="checkBox">
//       <input type="checkbox" name="ckb1" value="">
//     </div>
//     <span ></span>
//     <i class="far fa-trash-alt"></i>
//   </div>

function createTask(){
  let input = document.createElement("input");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let span = document.createElement("span");
  let i = document.createElement("i");
  let divTodo = document.getElementById("todoItems");
  let newTaskInput = document.getElementById("newTask");
  //let chkBox = document.getElementsByName('chk1');


  input.type = "checkbox";
  input.name = "chk1";
  input.addEventListener("click", makeChecked);
  div2.className = "checkBox";
  div1.className = "itemRow";
  i.className = "far fa-trash-alt trash";
  if(newTaskInput.value)
    {
      span.innerText = newTaskInput.value;}
      else {
        alert("Please enter the task");
        return;
      }

  i.addEventListener("click", del);
  div2.appendChild(input);
  div1.appendChild(div2);
  div1.appendChild(span);
  div1.appendChild(i);
  //divTodo.appendChild(div1);

  let list = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(div1);
  list.appendChild(li);
  newTaskInput.value = "";

}

function addTask(){
  let add = document.getElementById("add");
  add.addEventListener("click",createTask);
}
addTask();

function del(){
  let div = this.parentElement;
  let li = div.parentElement;
  div.style.display = "none";
  li.style.display = "none";
}

function makeChecked(){
  debugger;
  let div = this.parentElement;
  if(this.checked){
    div.nextElementSibling.style.textDecoration = "line-through";
  }
  else {
    div.nextElementSibling.style.textDecoration = "none";
  }
}
