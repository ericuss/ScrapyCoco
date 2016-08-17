var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

app.get('/scrape', function (req, res){
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function (error, response, html){

        if(!error){
            var $ = cheerio.load(html),
                title, release, rating;
            var json = { title : "", release : "", rating : ""};

            // We'll use the unique header class as a starting point.
            json.title = $('.title_wrapper [itemProp="name"]').text();
            json.rating = $('.ratings_wrapper [itemProp="ratingValue"]').text();
            json.release = $('.title_wrapper #titleYear a').text();

            res.send(json);
            fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})
        }
    });
});

app.listen('8081');

console.log('start')

exports = module.exports = app;