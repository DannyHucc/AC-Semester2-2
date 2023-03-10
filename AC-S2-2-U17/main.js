const button = document.querySelector('button')
const content = document.querySelector('.content')

button.addEventListener('click', function () {
    axios.get('https://webdev.alphacamp.io/api/lyrics/Coldplay/Yellow.json')
        .then(function (response) {
            // handle success
            console.log(response.data.lyrics)
            content.textContent = response.data.lyrics;
        })
        .catch(function (error) {
            // handle error
            content.textContent = error;
        })
})