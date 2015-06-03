var AppModel = Backbone.Model.extend({
  initialize: function() {
    // TODO: Set a company collection to hold the models
    this.set('currentCompany', new CompanyModel({id: 1})); // Current Company being displayed
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
