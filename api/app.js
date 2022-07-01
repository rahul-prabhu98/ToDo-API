'use strict';
module.exports = function(app) {
    let todoModel = require('./models/todo');

    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};