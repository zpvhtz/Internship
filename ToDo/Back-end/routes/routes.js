'use stricts';

module.exports = function(app) {
    let taskCtrl = require('./controllers/TaskController');
    let taskRouter = require('express').Router();

    //Tasks
    app.route('/tasks').get(taskCtrl.get)
                       .post(taskCtrl.add);
    app.route('/tasks/pages').get(taskCtrl.getPages);
    app.route('/task/:Id').get(taskCtrl.detail)
                         .put(taskCtrl.edit)
                         .delete(taskCtrl.delete);
}