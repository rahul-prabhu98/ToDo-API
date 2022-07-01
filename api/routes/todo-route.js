'use strict';
module.exports =function(app){
    const todoController = require('../controller/todo-controller');
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.post);

    app.route('/todo/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);

};