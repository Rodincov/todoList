let input = document.querySelector('input')
let btn = document.querySelector('button')
let todoItems = document.querySelector('.todo-items')
let arrTodo = []

btn.addEventListener('click', function(){
    createItem()
    // console.log(itemDone())
    // let h3 = document.createElement('h3')
    // todoItems.prepend(h3)
    // h3.innerHTML = input.value
    // input.value =``
})
function postItem(){

}
function createItem(){
    todoItems.innerHTML += `
    <div class="item">
    <h4>&#10004</h4>
    <h3>${input.value}
    ${input.value = ``}</h3>
    <h5>&#10006</h5>
    </div>
    `
    deleteItem()
    doneItem()
}
function deleteItem() {
    let item = document.querySelectorAll('h5')
    console.log(item)
    for(i=0; i < item.length; i++){
        item[i].addEventListener('click', function() {
            this.parentNode.remove()
        })
    }
}
function doneItem() {
    let done = document.querySelectorAll('h4')
    for(i=0; i < done.length; i++) {
        done[i].addEventListener('click', function(){
            this.parentNode.style.textDecoration = 'line-through'
            this.parentNode.style.color = 'gray'
        })
    }
}
