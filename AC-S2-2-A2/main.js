// 使用嚴格模式
'use strict'

// 建立節點
const button = document.querySelector('.btn')
const girls = document.querySelector('.girls')

// 創建 function addAvatar 增加人物
function addAvatar() {
    let users = []
    while (users.length < 3) {
        // 使用 axios 取得 API
        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                const user = response.data.results[0]
                if (user.gender === 'female') // 判斷是否為女生
                {
                    users.push(user) // 製作人物
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            break
    }
    console.log(users)
    console.log(users.length)
}

// 創建 function doAvatar 製作人物
function doAvatar(response) {

    // 創建變數用來存放人物的資料
    const firstName = response.data.results[0].name.first
    const lastName = response.data.results[0].name.last
    const src = response.data.results[0].picture.large
    const email = response.data.results[0].email

    // 創建變數 htmlContent 用來增加資料
    return  `
            <div class="card m-2 p-2 style="width: 14rem">
            <h5 class="card-title">${firstName} ${lastName}</h5>
            <img src="${src}" class="card-img" alt="card-img">
            <p class="card-text">${email}</p>
            </div>
            `
}


// 建立按鈕事件
button.addEventListener('click', addAvatar)