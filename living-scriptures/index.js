const movieInfo = require('./components/movieInfo')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.movies) {
        let movies = req.query.movies.split(',')
        let info = movieInfo(movies)
        console.log(info)
        context.res = {
            body: info
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};