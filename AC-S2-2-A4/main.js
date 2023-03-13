// 使用嚴格模式
'use strict'

// 初始變數
const addBtn = document.querySelector("#add-btn")
const input = document.querySelector("#new-todo")
const todoList = document.querySelector("#my-todo")
const doneList = document.querySelector("#my-done")

// 資料
const todos = [
    "Hit the gym",
    "Read a book",
    "Buy eggs",
    "Organize office",
    "Pay bills"
]

// 新增內容
function addItem(text, className = '') {
    let newItem = ""
    newItem =
        `
    <li>
        <label for="todo" class="label ${className}">${text}</label>
        <i class="delete fa fa-trash"></i>
    </li>
    `
    return newItem
}

// 創建輸入功能
function inputValues(event) {
    const inputValue = input.value
    if ((inputValue.length > 0) && // 判斷有輸入內容
        (inputValue.trim() !== "") // 判斷不是空白
    ) {
        // 判斷事件為 click
        if (event.type.toString() === 'click') {
            const className = 'todo'
            todoList.innerHTML += addItem(inputValue, className) // 新增內容
            input.value = ""
            // 判斷事件為 keyup
        } else if (event.key.toString() === 'Enter') {
            todoList.innerHTML += addItem(inputValue) // 新增內容
            input.value = ""
        }
    } else {
        console.log('123')
    }
};

// delete list
function deleteList(event) {
    const target = event.target
    target.parentElement.remove() // 刪除元素
}

// move To Done List
function moveToDoneList(event) {
    const target = event.target
    const parentElement = target.parentElement
    if (target.classList.contains("delete")) {
        deleteList(event) // 刪除元素
    } else if (target.tagName === "LABEL") { // 當點擊 label
        const className = 'checked'
        // 增加至 done list 裏面
        doneList.innerHTML += addItem(parentElement.textContent, className) // 新增內容
        deleteList(event) // 刪除元素
    }
}

// move To Todo List
function moveToTodoList(event) {
    const target = event.target
    const parentElement = target.parentElement
    if (target.classList.contains("delete")) {
        deleteList(event) // 刪除元素
    } else if (target.tagName === "LABEL") { // 當點擊 label
        // 增加至 done list 裏面
        todoList.innerHTML += addItem(parentElement.textContent) // 新增內容
        deleteList(event) // 刪除元素
    }
}

// 增加初始的內容
for (let todo of todos) {
    const className = 'todo'
    todoList.innerHTML += addItem(todo, className)
}

// 建立按鈕的事件
addBtn.addEventListener("click", inputValues)

// 建立鍵盤的事件
input.addEventListener("keyup", inputValues)

// 建立點擊 todo list 的事件
todoList.addEventListener("click", moveToDoneList)

// 建立點擊 done list 的事件
doneList.addEventListener("click", moveToTodoList)