const movieInfo = require('./components/movieInfo')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let info = movieInfo()
    console.log(info)
    context.res = {
        body: info
    };
};