var companyModel = Backbone.Model.extend({
  url: '/data',
  initialize: function() {
    this.set('company', this.fetch());
  }
});