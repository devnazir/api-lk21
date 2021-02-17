const axios = require('axios');
const cheerio = require('cheerio');

async function scraping(res, url) {
    try {
        const response = await axios(url)
        return response.data
    }
    catch (err) {
        res.json({ error: err.message })
    }
}

async function getMovie(res, url, numPage) {
    try {
        const html = await scraping(res, url)
        const $ = cheerio.load(html)
        const article = $('#main article')
        let result = []

        article.each(function () {
            const title = $(this).find('.item-article h2').text()
            const watch = $(this).find('.gmr-watch-movie a').attr('href')
            const thumbnail = $(this).find('.content-thumbnail a img').attr('data-src')
            const rating = $(this).find('.gmr-rating-item').text()
            const duration = $(this).find('.gmr-duration-item').text()
            const quality = $(this).find('.gmr-quality-item').text()
            const genre = $(this).find('.item-article .gmr-movie-on').text()
            const g = genre.split(',').slice(0, genre.split(',').length - 1)
            const trailer = $(this).find('.gmr-popup-button a').attr('href')

            result.push({
                title,
                thumbnail,
                genre: g,
                rating,
                duration,
                quality,
                trailer,
                watch,
            })

        })

        res.json({ result, page: numPage ?? 1 })
    }
    catch (err) {
        console.log(err)
    }
}

function getJSON(res, url, numPage) {
    if (numPage) {
        getMovie(res, url, numPage)
        return
    }

    getMovie(res, url)
}

module.exports = getJSON