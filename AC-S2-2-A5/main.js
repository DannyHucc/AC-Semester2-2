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

// 顯示產品資訊
function displayProduct(productData) {
    // 處理每個節點內容
    Array.from(menu.children).forEach((product, index) => {
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
    cart.innerHTML = ""
}

// 新增訂單
function addNewOrder(target) {
    // 產品名稱
    const name = target.previousElementSibling.previousElementSibling.textContent
    // 產品價錢
    const price = target.previousElementSibling.textContent
    // 回傳訂單資訊
    return `<li class="list-group-item">${name} X 1 小計： ${price}</li>`
}

// 顯示總價
function displayTotalAmount(cart) {
    // 用來儲存總價
    let total = 0
    // 處理每個節點內容
    Array.from(cart.children).forEach((item) => {
        // 取得數量
        let count = item.textContent.split(" ")[2]
        // 取得價錢
        let price = item.textContent.split(" ")[4]
        // 計算總價
        total += count * price
    })
    // 修改總價內容
    totalAmount.textContent = total
}

// 顯示購物清單
function displayListGroup(event) {
    // 存取目標事件
    const target = event.target
    // 當目標事件的 class 為 btn
    if (target.classList.contains('btn')) {
        // 新增訂單
        cart.innerHTML += addNewOrder(target)
        // 顯示總價
        displayTotalAmount(cart)
    }
}

// 顯示購買狀況
function alertSentOrder() {
    // 確認是否有購買產品
    if (totalAmount.textContent === "--") {
        // 顯示尚未購買
        alert("你尚未購買產品");
    } else {
        // 增加文字
        let text = "感謝購買"
        // 處理每個訂單的內容
        Array.from(cart.children).forEach((item) => {
            // 處理訂單的內容
            text += `\n${item.textContent}`
        })
        // 增加總金額
        text += `\n總金額：${totalAmount.textContent}`
        // 顯示購買狀況
        alert(text);
    }
}

// 顯示產品資訊
displayProduct(productData)

// 清空訂單狀況
emptyOrder()

// 處理購物清單事件
menu.addEventListener('click', displayListGroup)

// 處理結帳事件
button.addEventListener('click', alertSentOrder)