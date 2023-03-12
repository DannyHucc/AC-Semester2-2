// 使用嚴格模式
'use strict'

// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://webdev.alphacamp.io/api/lyrics/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
    artist: 'Adele',
    album: '25',
    tracks: [
        'Hello',
        'Send My Love (To Your New Lover)',
        'I Miss You',
        'When We Were Young',
        'Remedy',
        'Water Under the Bridge',
        'River Lea',
        'Love in the Dark',
        'Million Years Ago',
        'All I Ask',
        'Sweetest Devotion'
    ]
}

// WRITE YOUR CODE ////////////////////////

// 顯示 SongList
function displaySongList (album) {
    // 用來存放內容
    let htmlText = ''
    // 用來取出每一個 track
    album.tracks.forEach(track => {
        // 加入元素到 htmlText
        htmlText += 
        `
        <li class"nav-item">
            <a class="nav-link" href="#" role="tab">${track}</a>
        </li>
        `
    })
    // 加入元素到 song list
    songList.innerHTML = htmlText
}

// 用來處理選單狀態
function menuState (event) {
    // 選取 class 有 active 的元素
    const activeItem = document.querySelector('#song-list .active')
    if (activeItem) {
        // 將 class 有 active 的元素刪除,取消點擊
        activeItem.classList.remove('active')
    }

    // 如果目標元素 class 包含 .nav-link
    if (event.target.matches('.nav-link')) {
        // 增加 class 為 active,表示有被點擊
        event.target.classList.add('active')
    }
}

// 處理要顯示的歌詞
function processLyrics (track, lyrics) {
    // 加入元素到 lyricsPanel
    lyricsPanel.innerHTML = `
                            <h1>${track}</h1>
                            <pre>${lyrics}</pre>
                            `
}

// 用來顯示歌詞
function displayLyrics (event) {
    // 呼叫函數 menuState 用來處理選單狀態
    menuState(event)
    // 取得被點選的曲目
    const track = event.target.textContent
    // 點擊時向 axios 發出請求
    axios.get(`${BASE_URL}Adele/${track}.json`)
        .then(response => {
            // 處理要顯示的歌詞
            processLyrics(track, response.data.lyrics)
        })
        .catch(error => console.log(error))
}

// 呼叫函數顯示 song list
displaySongList(album)

// 建立選單事件
songList.addEventListener('click', displayLyrics)