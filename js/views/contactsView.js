App.Models.Contacts = Backbone.Model.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/contactsoflindsey'
});

App.Views.ContactsView = Backbone.View.extend({
  template: _.template($('#contactsTemplate').html()),
  render: function() {
    this.$el.html(this.template({contacts: this.collection.toJSON()}));   //I think this is where something went wrong 
  },
  events: {
    'click #contactsSubmit' : 'handleClick'
  },
  handleClick: function(event) {
      var nameFirst = $('#nameFirst').val();
      var nameLast = $('#nameLast').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var twitter = $('#twitter').val();
      var linkedin = $('#linkedin').val();

      this.collection.create({
        'nameFirst': nameFirst,
        'nameLast': nameLast,
        'email': email,
        'phone': phone,
        'twitter': twitter,
        'linkedin': linkedin
      });
      
      console.log(this.collection);
  }
});