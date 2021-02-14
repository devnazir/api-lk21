const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const fs = require('fs');

async function getMovie(res) {
    let url = 'https://lk21online.xyz/page/2/'
    const response = await axios(url)
    dataMovie(response.data, res)
}

function dataMovie(html, res) {
    const $ = cheerio.load(html)
    const main = $('#main article')
    let arrNewUpload = []

    main.each(function () {
        const title = $(this).find('.item-article h2').text()
        const watch = $(this).find('.gmr-watch-movie a').attr('href')
        const thumbnail = $(this).find('.content-thumbnail a img').attr('data-src')

        arrNewUpload.unshift({
            title,
            watch,
            thumbnail
        })

    })
    
    let arrOfObject = [{
        newUpload: arrNewUpload,
        page: null
    }]

    fs.writeFile('./data/movie.json', JSON.stringify(arrOfObject), function (err) {
        if (err) console.log(err)
        console.log('Succes create a file json')
        res.end('Success')
    })
}

app.get('/', function (req, res) {
    getMovie(res)
})

app.listen(8000, () => 'Server work at localhost:8000')