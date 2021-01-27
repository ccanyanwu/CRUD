var models  = require('../models');
var express = require('express');
var router  = express.Router();

/*/require controllers
var user_controller = require('../controllers/userController');

//get user homepage
router.get('/', user_controller.index);
// GET request for  user created
router.get('/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/create', user_controller.user_create_post);

// GET details for one user.
router.get('/user:id', user_controller.user_detail);

// GET request for list of all user.
router.get('/users', user_controller.user_list);

// GET request for all users details.
router.get('/users', user_controller.user_detail_all);

// GET request to update a record of Timesheet..
	router.get('/user:id/update', user_controller.user_update_get);
	
// POST request to update a record of Timesheet..
	router.post('/user:id/update', user_controller.user_update_post);
	
	// GET request to delete a record of Timesheet.
	router.get('/user:id/delete', user_controller.user_delete_get);
	
	// POST request to delete a record of Timesheet..
	router.post('/user:id/delete', user_controller.user_delete_post);
/*my stuff ends here*/

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
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
