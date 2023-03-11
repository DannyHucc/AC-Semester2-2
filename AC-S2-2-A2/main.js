// 使用嚴格模式
'use strict'

// 建立 按鈕 的節點
const button = document.querySelector('.btn')
// 建立 增加女性使用者 的節點
const girls = document.querySelector('.girls')

// 創建 function doAvatar 製作人物
function showAvatar(users) {
    // 取出每一個 user
    users.forEach(user => {
        // 創建變數 htmlContent 用來增加資料
        girls.innerHTML +=
            `
            <div class="card m-2 p-2 style="width: 14rem">
            <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
            <img src="${user.src}" class="card-img" alt="card-img">
            <p class="card-text">${user.email}</p>
            </div>
            `
    });
}

// 創建 function addAvatar 增加人物
async function addAvatar() {
    // 建立 users 用來存放每個 user
    let users = []
    // 當找到三位女性,則停止迴圈
    while (users.length < 3) {
        // 想使用異步/等待方式,將 `async` 關鍵字添加到外部函數/方法。
        try {
            // 使用 await axios 取得 API
            const response = await axios.get('https://randomuser.me/api/')
            // 讀取人物的資料
            const user = response.data.results[0]
            // 判斷是否為女生
            if (user.gender === 'female') {
                // 創建變數用來存放人物的資料
                const firstName = user.name.first
                const lastName = user.name.last
                const src = user.picture.large
                const email = user.email
                // 創建變數 userData 用來整理已經取得的資料
                const userData = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "src": src,
                    "email": email
                }
                // 新增 user 資料
                users.push(userData)
            }
        } catch (error) {
            console.error(error);
        }
    }
    // 呼叫 showAvatar 函數
    showAvatar(users)
}

// 建立按鈕事件
button.addEventListener('click', addAvatar)