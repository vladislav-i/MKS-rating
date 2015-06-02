var companyView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html('<div>' + this.model.get('name') + '</div>');
  }
});