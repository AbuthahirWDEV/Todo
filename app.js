let input = document.getElementById('input')
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = []
// this function will take value from local storage and put in loop and show all values stored in loca storage 
// window.onload it will execute every refresh of browser
window.onload = () =>{
    todos = JSON.parse( localStorage.getItem('todos')) || []
    todos.forEach(element => {
        addTodo(element)
    });
}

button.addEventListener(('click'), ()=> {
    if(input.value==""){
        alert('empty string not alllowed')
    }
    else{
        todos.push(input.value)
        // this local storage store all values 
        localStorage.setItem('todos',JSON.stringify(todos))
        addTodo(input.value)
        input.value=''
    }
    
})

function addTodo(todo){
    // todos is ana array which is in global scope 
    // todo is a local variable in this function used to store a single value
    let para = document.createElement('p')
    para.innerHTML = todo
    todoList.appendChild(para)
    // to remove values 
    para.addEventListener(('click'), ()=>{
        // para.style.textDecoration = 'line-through'
        todoList.removeChild(para)
        remove(todo)
    })
}


function remove(paravalue){
    // finding the index of clicked value and splice to remove the value 
    // we are not using slice because splice wont affect the original array
    let index  = todos.indexOf(paravalue)
    if(index >-1){
        todos.splice(index,1)
    }
    // here after deleting the value in array we are replacing the original array and set that values to local storage 
    localStorage.setItem('todos',JSON.stringify(todos))
}