
document.querySelector('#all').onclick =
async function fetchTodos(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';
    
    data.forEach(function(todo, index) {
        if(todo.completed == false){
            todo.completed = "Pending"
        }
        else{
            todo.completed = "Completed"
        }
        
        output +=`<div class="list"><p key=${index}>
                    <span class = "task">
                    Title : ${todo.title}   | 
                    id : ${todo.id}  |  
                    userId : ${todo.userId}  |
                    Status : ${todo.completed}  |  

                    </span>
                </p></div>`
    });
    document.querySelector('.todos').innerHTML = output;
    }

    
document.querySelector('#pending').onclick =
async function fetchTodos(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';
    
    data.forEach(function(todo, index) {
        if(todo.completed == false){
            todo.completed = "Pending"
           
        output +=`<div class="list"><p key=${index}>
                    <span class = "task">
                    Title : ${todo.title}   | 
                    id : ${todo.id}  |  
                    userId : ${todo.userId}  |
                    Status : ${todo.completed}  |  

                    </span>
                </p></div>`

        }
    });
    document.querySelector('.todos').innerHTML = output;
    }

document.querySelector('#completed').onclick =
async function fetchTodos(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = '';

    data.forEach(function(todo, index) {
        if(todo.completed == true){
            todo.completed = "Completed"
        
        output +=`<div class="list"><p key=${index}>
                    <span class = "task">
                    Title : ${todo.title}   | 
                    id : ${todo.id}  |  
                    userId : ${todo.userId}  |
                    Status : ${todo.completed}  |  


                    </span>
                </p></div>`

        }
    });
    document.querySelector('.todos').innerHTML = output;
    }
    

    
// let keyVal = 0

// document.querySelector('button').onclick = function(){
//     const text = document.querySelector('input').value;
//     const display = document.querySelector('.todos');
//     display.innerHTML +=
//     `<p key = ${keyVal}>${text}</p>`;
//     keyVal++;

//     const del = document.querySelectorAll('p');
//     for(let i = 0; i< del.length; i++){
//         del[i].onclick = function(){
//             this.remove();
//         }
//     }
// }


    