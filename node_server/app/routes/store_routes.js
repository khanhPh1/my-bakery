const controller = '/store';

var storeProvider = require('../provider/store');
module.exports = function (app, con) {
    app.get(controller + '/getlist', (req, res) => {
        console.log(req.body);
        storeProvider.getlist(con, function(response) {
            res.send(response);
        });
    });
};