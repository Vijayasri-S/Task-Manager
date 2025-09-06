const task=document.querySelector("input");
const buttonAdd=document.querySelector("button");
const list=document.querySelector(".listTasks");
loadTasks();
function loadTasks(){
    
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(taskObj=>{
         const mytask=document.createElement("li");
         const finished=document.createElement("input");
         const span=document.createElement("span");
         finished.setAttribute("type","checkbox");
    finished.setAttribute("value","done");
    finished.checked=taskObj.done;
    mytask.appendChild(finished);
    span.textContent=taskObj.text;
    mytask.appendChild(span);
    const remove=document.createElement("button");
    mytask.appendChild(remove);
    remove.textContent="Delete";
    list.appendChild(mytask);
    finished.addEventListener("change",()=>{
        saveTasks();
    });
     remove.addEventListener("click",()=>{
        list.removeChild(mytask);
        saveTasks();
    })
    });

}
function saveTasks(){
    const tasks=[];
    document.querySelectorAll("ul li").forEach(li=>{
        const text=li.querySelector("span").textContent;
        const done=li.querySelector("input[type='checkbox']").checked;
        tasks.push({text:text,done:done});
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
}
buttonAdd.addEventListener("click",()=>{
    const mylist=task.value;
    task.value="";
    const mytask=document.createElement("li");
    const finished=document.createElement("input");
    const span=document.createElement("span");
    finished.setAttribute("type","checkbox");
    finished.setAttribute("value","done");
    mytask.appendChild(finished);
    span.textContent=mylist;
    mytask.appendChild(span);
    const remove=document.createElement("button");
    mytask.appendChild(remove);
    remove.textContent="Delete";
    list.appendChild(mytask);
    saveTasks();
    finished.addEventListener("change",()=>{
        saveTasks();
    });
    remove.addEventListener("click",()=>{
        list.removeChild(mytask);
        saveTasks();
    })
    task.focus();
});