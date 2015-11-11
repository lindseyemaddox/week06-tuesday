var App = {};
App.Models = {};
App.Views = {};
App.Collections = {};

App.Router = Backbone.Router.extend({
  routes: {
    '' : 'contacts'
  },
  contacts: function() {
    var contactsView = new App.Views.ContactsView({
      collection: new App.Collections.Contacts()
    });
    contactsView.collection.fetch({
      success: function(collection, data, options){
        contactsView.render();
        $('#contactsForm').html(contactsView.el);
      },
      error: function() {}}); 
  },
});

$('document').ready(function() {
  App.router = new App.Router();
  Backbone.history.start();
});


// not getting any errors, but I don't know what's going on. It's not submitting.