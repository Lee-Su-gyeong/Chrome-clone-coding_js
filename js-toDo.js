const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';

let toDos=[];

function deleteToDo(event){
    //console.log(event.target.parentNode);
    const btn=event.target;
    const li =btn.parentNode;
    toDoList.removeChild(li);
    
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
        //자기 id와 toDo에 있는 id들 중 같지 않은 것만 return
    });
    toDos=cleanToDos;
    saveToDos();
    //local strage에 지워진 li는 삭제하고 todo 새로 저장

    console.log(cleanToDos);
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("Button");
    const span =document.createElement("span");
    const newId=toDos.length+1;
    delBtn.innerText ="✖";
    delBtn.addEventListener("click",deleteToDo);
    
    span.innerText=text+"  ";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id:newId

    };
    toDos.push(toDoObj);
    saveToDos()
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}

function loadToDos(){
    const toDos =localStorage.getItem(TODOS_LS);
    if(toDos !==null){

    }

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
 init();
