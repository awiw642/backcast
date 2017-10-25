var VideoPlayerView = Backbone.View.extend({

// Pass a video from exampleVideoData into VideoPlayerView
// Make VideoPlayerView to play the video
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
    //listener: upon select, invoke selectVideo

    // selectVideo: select the input and render it
  },

  // from soln
  selectVideo: function(video){
    this.model = video;
    this.render();
  },

  render: function() {
    // if this.model is defined, go to template
    // else, go to wait screen
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },


  template: templateURL('src/templates/videoPlayer.html')
  // Underscore template - How do I use templating in this
});
