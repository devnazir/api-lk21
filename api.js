const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

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

app.get('/', function (req, res) {
    res.json({error: "Silahkan baca dokumentasi di https://github.com/devnazir/api-lk21/#readme"})
})

app.get('/newupload', function (req, res) {
    const numPage = req.query.page ?? 1
    let url = `https://lk21online.xyz/page/${numPage}/`
    getJSON(res, url, numPage)
})

app.get('/comingsoon', function (req, res) {
    const numPage = req.query.page ?? 1
    let url = `https://lk21online.xyz/coming-soon/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/tv', function (req, res) {
    const numPage = req.query.page ?? 1
    let url = `https://lk21online.xyz/tv-series/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/year', function (req, res) {
    const numPage = req.query.page ?? 1
    const year = req.query.year
    let url = `https://lk21online.xyz/year/${year}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/country', function (req, res) {
    const numPage = req.query.page ?? 1
    const country = req.query.country
    let url = `https://lk21online.xyz/country/${country}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/genre', function (req, res) {
    const numPage = req.query.page ?? 1
    const genre = req.query.genre
    let url = `https://lk21online.xyz/${genre}/page/${numPage}`
    getJSON(res, url, numPage)
})

app.get('/search', function (req, res) {
    const numPage = req.query.page ?? 1
    const query = req.query.query

    let url = `https://lk21online.xyz/page/${numPage}/?s=${query}`
    getJSON(res, url, numPage)
})

app.get('*', function (req, res) {
    res.json({ Error: "Parameter yang anda masukan salah" })
})

app.listen(process.env.PORT || 8000, () => 'Server work at localhost:8000')