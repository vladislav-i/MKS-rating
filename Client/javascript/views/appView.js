var AppView = Backbone.View.extend({
  initialize: function(params){
    this.companyView = new companyView({model: this.model.get('currentCompany')});  
  },
  
  render: function(){
    return this.$el.html([
      'hello',
      this.companyView.$el
    ]);
    
  }
});