var User = require('../models/user');
var models = require("../models");

/*exports.user_get_all_details = function(req, res, next) {
        // create author GET controller logic here 
         models.User.findAll(
        ).then(function(users) {
        // renders a post list page
        console.log("rendering user list");
        res.render('pages/index_user', { title: 'Get all Users', users, layout: 'layouts/detail'});
        console.log("Users details renders successfully");
        });
};*/

// Display author create form on GET.
exports.user_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
};

// Handle author create on POST.
exports.user_create_post = function(req, res, next) {
     
      models.User.create({
            
            full_name: req.body.full_name
        }).then(function() {
            console.log("User created successfully");
           // check if there was an error during post creation
     //res.redirect("/pages/users");// fix
      });
      res.redirect("/blog/users");
};

// Display author delete form on GET.
exports.user_delete_get = function(req, res, next) {
        // GET logic to delete an author here
        models.User.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.user_id
            }
          }).then(function() {
           // If an post gets deleted successfully, we just redirect to posts list
           // no need to render a page
            //res.redirect('/blog/users');
            console.log("User deleted successfully");
          });
        // renders author delete page
        res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
};

// Handle author delete on POST.
exports.user_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        // If an author gets deleted successfully, we just redirect to authors list
        // no need to render a page
         models.User.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.author_id
            }
          }).then(function() {
           // If an post gets deleted successfully, we just redirect to posts list
           // no need to render a page
        res.redirect('/users');
            console.log("User deleted successfully");
          });
};

// Display author update form on GET.
exports.user_update_get = function(req, res, next) {
        
         models.User.findOne({ where: { id: req.params.user_id } }
        ).then(function(user) {
               // renders a post form
        res.render('forms/user_form', { title: 'Update User', user:user, layout: 'layouts/detail'});
               console.log("User update get successful");
          });
        // renders author form
};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update an author here
        // If an author gets updated successfully, we just redirect to authors list
        // no need to render a page
         models.User.update(
        // Values to update
            {
            first_name: req.body.first_name,
           last_name: req.body.last_name,
           username: req.body.username,
           role: req.body.role,
           email: req.body.email
        },
          { // Clause
                where: 
                {
                    id: req.params.author_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
                // If an post gets updated successfully, we just redirect to posts list
                // no need to render a page
        res.redirect("/users");
                console.log("User updated successfully");
          });
};

// Display list of all authors.
exports.user_list = function(req, res, next) {
        // GET controller logic to list all users
        models.User.findAll(
        ).then(function(users) {
        // renders a post list page
        console.log("rendering user list");
        res.render('pages/user_list', { title: 'User List', users:users, layout: 'layouts/list'} );
        console.log("Users list renders successfully");
        });
        // renders all authors list
        //res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list'} ); //oa
};

// Display detail page for a specific author.
exports.user_detail = function(req, res, next) {
        // GET controller logic to display just one author
        
        // renders an individual author details page
        res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail'} );
};
// This is the blog homepage.
exports.index = function(req, res) {

      // find the count of posts in database
      models.User.findAndCountAll(
      ).then(function(userCount) {
          
       
        // find the count of authors in database
 
        // find the count of comments in database
 
        // find the count of categories in database
 
        res.render('pages/index', {title: 'Homepage', userCount:userCount, layout: 'layouts/main'});
        
        // res.render('pages/index_list_sample', { title: 'Post Details', layout: 'layouts/list'});
        // res.render('pages/index_detail_sample', { page: 'Home' , title: 'Post Details', layout: 'layouts/detail'});
      
      });
    
    
    };
 