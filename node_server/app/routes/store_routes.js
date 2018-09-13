const controller = '/store';

var storeProvider = require('../provider/store');
var authMiddleware = require('../middleware/auth');
module.exports = function (app, con) {
    app.get(controller + '/getlist', authMiddleware.Authenticated ,(req, res) => {
        storeProvider.getlist(con, function(response) {
            res.send(response);
        });
    });
};