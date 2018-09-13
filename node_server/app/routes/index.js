const userRoutes = require('./user_routes');
const storeRoutes = require('./store_routes');
module.exports = function(app, db) {
    userRoutes(app, db);
    storeRoutes(app, db);
  // Other route groups could go here, in the future
};

