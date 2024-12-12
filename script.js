
let ctr = 1;
function addToDo(){
    const inputVal = document.querySelector(".inputToDo");
    const value = inputVal.value;
    if(value === ""){
        alert('Enter YOur Todo First!');
    }
    else{
    const container = document.querySelector("#input-container");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo-container-" + ctr );
    const newEL = document.createElement("span");
    const deleteBtn = document.createElement("button");
    newDiv.appendChild(newEL);
    deleteBtn.innerHTML = "Delete";
    newDiv.appendChild(deleteBtn);
    newEL.innerHTML = ctr + ". " + value;
    
    container.appendChild(newDiv);
    deleteBtn.setAttribute('onclick', "deleteToDo(" + ctr +")");
    ctr += 1;
    }
}
function deleteToDo(ctr){
    const parentnode = document.querySelector("#input-container");
    const childnode = document.querySelector("#todo-container-" + ctr);
    parentnode.removeChild(childnode);
}

