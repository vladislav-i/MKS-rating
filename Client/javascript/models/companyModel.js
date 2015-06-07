var CompanyModel = Backbone.Model.extend({
  // TODO: Update company model to be a part of the company collection
  // TODO: Manage Ids of company models for easy querying according to id: http://backbonejs.org/#Model-url

  urlRoot: '/data',

  initialize: function() {
    this.fetch();
  }
});
