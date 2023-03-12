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
    // 用來存放 html 語句
    let html = ''
    // 用來取出每一個 track
    album.tracks.forEach(track => {
        html += 
        `
        <a class="song-list" id="list-profile-list" href="#list-profile" role="tab">${track}</a>
        `
    })
    songList.innerHTML = html
}

displaySongList(album)