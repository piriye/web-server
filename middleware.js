
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toDateString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;