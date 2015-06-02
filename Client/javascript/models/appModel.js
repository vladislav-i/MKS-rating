var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('currentCompany', new companyModel()); // Current Company being displayed
  },
  next: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('next', this);
  },
  prev: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('prev', this);
  },
});
