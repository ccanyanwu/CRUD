var Author = require('../models/author');
var models = require('../models');

// Display author create form on GET.
exports.author_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
};

// Handle author create on POST.
exports.author_create_post = function(req, res, next) {
     // create author POST controller logic here
     // If an author gets created successfully, we just redirect to authors list
     // no need to render a page
      models.Author.create({
            author_first_name: req.body.author_first_name,
            author_last_name: req.body.author_last_name
        }).then(function() {
            console.log("Author created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/authors');
      });
     res.redirect("/authors");
};

// Display author delete form on GET.
exports.author_delete_get = function(req, res, next) {
        // GET logic to delete an author here
        models.Author.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.author_id
            }
          }).then(function() {
           // If an post gets deleted successfully, we just redirect to posts list
           // no need to render a page
            res.redirect('/blog/authors');
            console.log("Authors deleted successfully");
          });
        // renders author delete page
        res.render('pages/author_delete', { title: 'Delete Author',  layout: 'layouts/detail'} );
};

// Handle author delete on POST.
exports.author_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        // If an author gets deleted successfully, we just redirect to authors list
        // no need to render a page
        models.Author.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.author_id
            }
          }).then(function() {
           // If an post gets deleted successfully, we just redirect to posts list
           // no need to render a page
            res.redirect('/blog/authors');
            console.log("Author deleted successfully");
          });
        res.redirect('/authors');
};

// Display author update form on GET.
exports.author_update_get = function(req, res, next) {
        // GET logic to update an author here
        console.log("ID is " + req.params.author_id);
        models.Author.findByPk(
                req.params.author_id
        ).then(function(author) {
               // renders a post form
               res.render('forms/author_form', { title: 'Update Author', post: author, layout: 'layouts/detail'});
               console.log("Author update get successful");
          });
        // renders author form
        res.render('forms/author_form', { title: 'Update Author',  layout: 'layouts/detail'});
};

// Handle post update on POST.
exports.author_update_post = function(req, res, next) {
        // POST logic to update an author here
        // If an author gets updated successfully, we just redirect to authors list
        // no need to render a page
        console.log("ID is " + req.params.author_id);
        models.Author.update(
        // Values to update
            {
                author_first_name: req.body.author_first_name,
                author_last_name: req.body.author_last_name
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
                res.redirect("/blog/authors");  
                console.log("Author updated successfully");
          });
        res.redirect("/authors");
};

// Display list of all authors.
exports.author_list = function(req, res, next) {
        // GET controller logic to list all authors
        models.Author.findAll(
        ).then(function(authors) {
        // renders a post list page
        console.log("rendering author list");
        res.render('pages/author_list', { title: 'Author List', posts: authors, layout: 'layouts/list'} );
        console.log("Authors list renders successfully");
        });
        // renders all authors list
        res.render('pages/author_list', { title: 'Author List',  layout: 'layouts/list'} );
};

// Display detail page for a specific author.
exports.author_detail = function(req, res, next) {
        // GET controller logic to display just one author
        models.Author.findByPk(
                req.params.author_id
        ).then(function(author) {
        // renders an inividual post details page
        res.render('pages/author_detail', { title: 'Author Details', post: author, layout: 'layouts/detail'} );
        console.log("Author details renders successfully");
        });
        // renders an individual author details page
        res.render('pages/author_detail', { title: 'Author Details',  layout: 'layouts/detail'} );
};

 