var companyView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    this.$el.html('<div>' + this.model.get('name') + ',' + this.model.get('location') + '</div>');
  }
});