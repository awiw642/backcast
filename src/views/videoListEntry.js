var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    //this.model.on('change', this.render, this);
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
    // click will request video model to trigger select, which will then be listened by video player - The linkage is controlled by app.js
  },

  handleClick: function() {
    this.model.select();
  },

  render: function() {
    // console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
