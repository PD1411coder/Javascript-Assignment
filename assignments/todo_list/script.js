let keyVal = 0

document.querySelector('button').onclick = function(){
    const text = document.querySelector('input').value;
    const display = document.querySelector('.todos');
    display.innerHTML +=
    `<p key = ${keyVal}>${text}</p>`;
    keyVal++;

    const del = document.querySelectorAll('p');
    for(let i = 0; i< del.length; i++){
        del[i].onclick = function(){
            this.remove();
        }
    }
}





// let task = document.querySelectorAll('div');

// document.querySelector('p').onclick = function(){
//     for (let i = 0; i > task.length; i++){
//         task[i].onclick = function(){
//             this.parentnode.remove();
//         }
//     } 
// }























// // document.getElementByKey("key").addEventListner("click", removeFunction);

// document.getElementByKey("key").onclick = function() {
//     document.getElementByKey("key").remove();
// }