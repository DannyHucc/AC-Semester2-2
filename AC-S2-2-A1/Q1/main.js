// 使用嚴格模式
'use strict'

// 取得圖片的節點
const img = document.querySelector('.dog-img')
// console.log(img)


// 使用 axios 取得隨機 dog 的 API
axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        // handle success
        // console.log(response.data.message)
        // 創建變數 apiImg 存取圖片
        const apiImg = response.data.message
        // 修改 img 的 src 改變圖片
        img.src = apiImg.toString()

    })
    .catch(function (error) {
        // handle error
        console.log(error)
    })