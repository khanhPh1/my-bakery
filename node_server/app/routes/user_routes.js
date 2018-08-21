const controller = '/user';

var userProvider = require('../provider/user');
module.exports = function (app, con) {
    app.post(controller + '/login', (req, res) => {
        console.log(req.body);
        userProvider.login(req.body.username, req.body.password, con, function(response) {
            res.send(response);
        });
    });
};