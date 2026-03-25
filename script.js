const container = document.getElementById("container");

document.querySelector('#add').addEventListener("click" , function(){
    const userInput = prompt("please add medicine info");
   let li = document.createElement("li");
   li.innerHTML = userInput;
   container.appendChild(li);
   saveData();
});

function saveData(){
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}

showTask();

