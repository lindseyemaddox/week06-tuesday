App.Collections.Contacts = Backbone.Collection.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/contactsoflindsey',
  model: App.Models.Contacts
});