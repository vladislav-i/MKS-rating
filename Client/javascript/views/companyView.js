var CompanyView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  template: _.template($('#company-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
