var AppView = Backbone.View.extend({
  initialize: function(params){
    this.companyView = new CompanyView({model: this.model.get('currentCompany')});
    this.render();
  },

  // Set the element to companyInfo div
  el: '.companyInfo',

  // Watch for button press events
  events: {
    "click .button-next": "transitionNext",
    "click .button-previous": "transitionPrevious",
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
    this.$el.prepend([
      'hello',
      this.companyView.$el
    ]);
  }
});
