var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // AppView.on('initialize', this.select);
  },

  select: function() {
    this.trigger('select', this);
    // need to invoke view.render?
  }

});
