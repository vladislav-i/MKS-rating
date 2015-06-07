var AppModel = Backbone.Model.extend({
  initialize: function() {
    // TODO: Set a company collection to hold the models
    this.set('currentCompany', new CompanyModel({id: 0})); // Current Company being displayed
  },
  nextCompany: function(){
    // Triggering an event here will also trigger the event on the collection
    var nextId = this.get('currentCompany').id + 1;
    var nextCompany = new CompanyModel({id: nextId});
    this.set('currentCompany', nextCompany);
  },
  prevCompany: function(){
    // Triggering an event here will also trigger the event on the collection
    var nextId = this.get('currentCompany').id - 1;
    var nextCompany = new CompanyModel({id: nextId});
    this.set('currentCompany', nextCompany);
  },
});
