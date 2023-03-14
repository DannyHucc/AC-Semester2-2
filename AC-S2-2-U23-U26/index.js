// 使用嚴格模式
'use strict'

// 設定 API 的 URL
const BASE_URL = 'https://webdev.alphacamp.io/'
const INDEX_URL = BASE_URL + 'api/movies/'
const SHOW_URL = BASE_URL + 'posters/'

// 渲染電影資料
function renderMovieList(movies) {
    // 取得節點
    const dataPanel = document.querySelector("#data-panel")
    // 存放 html
    let rawHTML = ''
    // 存放每一筆資料
    movies.forEach((movie) => {
        // 新增每一筆資料
        rawHTML +=
            `
        <div class="col-sm-3">
                <div class="mb-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${SHOW_URL}${movie.image}"
                            class="card-img-top" alt="Movie Poster">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                        </div>
                        <div class="card-footer">
                            <button 
                            type="button" 
                            class="btn btn-primary btn-show-movie" 
                            data-bs-toggle="modal" 
                            data-bs-target="#movie-model"
                            >
                                More
                            </button>
                            <button type="submit" class="btn btn-info btn-add-favorite">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    // 為資料做渲染
    dataPanel.innerHTML = rawHTML
}

// 儲存 API 並渲染電影資料
axios
    .get(INDEX_URL)
    .then((response) => {
        // 宣告容器
        const movies = []
        // 存放 API 每一筆電影資料
        movies.push(...response.data.results)
        // 渲染每一筆電影
        renderMovieList(movies)
    })
    .catch((err) => console.log(err))