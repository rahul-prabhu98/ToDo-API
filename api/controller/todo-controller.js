
'use strict';

const todoService = require('../services/todo-service');

exports.list = function(req, res) {
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
};

exports.get = function(req, res){
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.get(req.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

exports.post = function (req, res) {
    const newTodo = Object.assign({}, req.body);
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(res));
};


exports.put = function (req, res) {
    const todo = Object.assign({}, req.body);
    const resolve = (todo) => {
        res.status(200);
        res.json(todo);
    };
    todo._id = req.params.todoId;
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

exports.delete = function (req, res) {
    const resolve = (todo) => {
        res.status(200);
        res.json({
            message: 'Todo Successfully deleted'
        });
    };
    todoService.delete(req.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};