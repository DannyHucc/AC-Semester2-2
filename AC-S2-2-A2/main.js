// 使用嚴格模式
'use strict'

// 建立節點
const button = document.querySelector('.btn')
const girls = document.querySelector('.girls')

// 創建 function addAvatar 增加人物
function addAvatar(event) {
    // 存取目標節點
    const target = event.target
    // 計數器
    let count = 1
    // 取得三個不同的人物
    while (count <= 3) {
        // 使用 axios 取得 API
        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                // handle success
                let gender = response.data.results[0].gender.toString()
                console.log(gender)
                if (gender === 'female')
                {
                    // 製作人物
                    doAvatar(target, response)
                    // count++
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        count++
    }
}

// 創建 function doAvatar 製作人物
function doAvatar(target, response) {

    // 創建變數用來存放人物的資料
    const firstName = response.data.results[0].name.first
    const lastName = response.data.results[0].name.last
    const src = response.data.results[0].picture.large
    const email = response.data.results[0].email

    // 創建變數 htmlContent 用來增加資料
    girls.innerHTML += 
    `
    <div class="card m-2 p-2">
        <h5 class="card-title">${firstName} ${lastName}</h5>
        <img src="${src}" class="card-img-top" alt="...">
        <p class="card-text">${email}</p>
    </div>
    `
}


// 建立按鈕事件
button.addEventListener('click', addAvatar)