var models  = require('../models');
var express = require('express');
var router  = express.Router();

// var userController = require("../controllers/userController");


// router.get('/', userController.user_get_all_details);

// router.get('/create', userController.user_create_get);

// router.post('/create', userController.user_create_post);

// router.get('/:user_id/delete', userController.user_delete_get);

// router.post('/:user_id/delete', userController.user_delete_post);

// router.get('/:user_id/update', userController.user_update_get);

// router.post('/:user_id/update', userController.user_update_post);

// router.get('/list', userController.user_list);

// router.get('/:user_id', userController.user_detail);

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/users');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
