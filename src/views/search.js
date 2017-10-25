var SearchView = Backbone.View.extend({

  // from soln
  events: {
    'keyup input': 'checkReturn',
    'click button': 'search'
  },

  checkReturn: function(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  },

  search: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
