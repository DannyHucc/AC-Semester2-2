// 使用嚴格模式
'use strict'

// 取得節點
const buttom = document.querySelector('.btn')

buttom.addEventListener('click', function (event) {
    // 取得事件節點
    const target = event.target
    // 取得節點
    const userName = target.parentElement.children[1]
    const avatar = target.parentElement.children[2].children[0]
    const email = target.parentElement.children[3]

    // 使用 axios 取得 randomuser api
    axios.get('https://randomuser.me/api/')
        .then(function (response) {
            // handle success
            // console.log(response.data.results[0].name.first)
            // console.log(response.data.results[0].name.last)
            // console.log(response.data.results[0].picture.medium)
            // console.log(response.data.results[0].email)

            // 設定變數
            const firstName = response.data.results[0].name.first
            const lastName = response.data.results[0].name.last
            const srcAPI = response.data.results[0].picture.medium
            const emailAPI = response.data.results[0].email

            // 修改內容
            userName.textContent = `${firstName} ${lastName}`
            avatar.src = srcAPI.toString()
            email.textContent = emailAPI.toString()
        })
        .catch(function (error) {
            // handle error
            console.log(error)
        })
})