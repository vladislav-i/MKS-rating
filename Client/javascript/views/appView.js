var AppView = Backbone.View.extend({
  initialize: function(params){
    this.companyView = new companyView({model: this.model.get('currentCompany')});
  },
  
  events: {
    "click .button-next": "transitionUp",
    "click .button-previous": "tranistionPrevious",
  },

  transitionNext: function() {
    console.log("button-next");
    this.model.next();
  },

  transitionPrevious: function() {
    console.log("button-previous");
    this.model.prev();
  },
  
  render: function(){
    return this.$el.html([
      'hello',
      this.companyView.$el
    ]);
    
  }
});