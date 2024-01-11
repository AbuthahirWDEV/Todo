let input = document.getElementById('input')
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = []

button.addEventListener(('click'), ()=> {
    todos.push(input.value)
    addTodo(input.value)
    input.value=''
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
}