// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
    {
        id: "product-1",
        imgUrl:
            "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "馬卡龍",
        price: 90
    },
    {
        id: "product-2",
        imgUrl:
            "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "草莓",
        price: 60
    },
    {
        id: "product-3",
        imgUrl:
            "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "奶茶",
        price: 100
    },
    {
        id: "product-4",
        imgUrl:
            "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "冰咖啡",
        price: 180
    }
];
// ======= 請從這裡開始 =======

// 建立節點
const productMenu = document.querySelector('#menu')

// 顯示產品資訊
function displayProduct(productData) {
    Array.from(productMenu.children).forEach((product, index) => {
        // 處理圖片
        product.firstElementChild.firstElementChild.
            src = productData[index].imgUrl
        // 處理產品名稱
        product.firstElementChild.
            lastElementChild.firstElementChild.
            textContent = productData[index].name
        // 處理產品價錢
        product.firstElementChild.
            lastElementChild.firstElementChild.
            nextElementSibling.
            textContent = productData[index].price
    })
}

// 清空訂單狀況
function emptyOrder() {
    productMenu.nextElementSibling.
        nextElementSibling.firstElementChild
        .innerHTML = ""
}

// 新增訂單
function addNewOrder(target) {
    // 產品名稱
    const name = target.previousElementSibling.previousElementSibling.textContent
    // 產品價錢
    const price = target.previousElementSibling.textContent
    // 回傳訂單資訊
    return `<li class="list-group-item">${name} X 1 小計：${price}</li>`
}

// 處理購物清單
function displayListGroup(event) {
    // 存取目標事件
    const target = event.target
    // 當目標事件的 class 為 btn
    if (target.classList.contains('btn')) {
        // 建立節點
        const listGroup = document.querySelector('.list-group')
        // 新增訂單
        listGroup.innerHTML += addNewOrder(target)
    }
}

// 顯示產品資訊
displayProduct(productData)

// 清空訂單狀況
emptyOrder()

// 處理購物清單
productMenu.addEventListener('click', displayListGroup)