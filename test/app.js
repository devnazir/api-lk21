async function newUploadMovies() {
    const response = await fetch('../data/movie.json')
    response.json()
        .then(res => console.log(res))
}

newUploadMovies()