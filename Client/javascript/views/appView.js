var AppView = Backbone.View.extend({
  initialize: function(params){
    this.listenTo(this.model, 'change', this.render);
    this.companyView = new CompanyView({model: this.model.get('currentCompany')});
    this.$el.prepend(this.companyView.$el);
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
    this.model.nextCompany();
  },

  transitionPrevious: function() {
    this.model.prevCompany();
  },

  render: function(){
    this.companyView.$el.remove();
    this.companyView = new CompanyView({model: this.model.get('currentCompany')});
    this.$el.prepend(this.companyView.$el);
  }
});
