var CompanyView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  template: _.template($('#company-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
