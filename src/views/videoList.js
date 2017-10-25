var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    );
        return this;
},

  //TODO: Understand how to render video list
  /*initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // map: receive videos collection and post to dom using videolistentryview (with model as video) with render method
    this.collection.forEach(function(vid){
      this.renderVideo(vid).bind(this);
      // VideoListView.prototype.renderVideo.call(this, vid);
    });

    for (var i = 0; i < this.collection.length; i++){
      this.renderVideo(this.collection.models[i]);
    }
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoView.render());
  },
*/
  // attach videoView to an empty div
  // div with videoView inside to a video-list div
  template: templateURL('src/templates/videoList.html')


});
// Object { cid: "view6", collection: Object, $el: Object[1], el: <div>, _listeningTo: Object, _listenId: "l8" }
// Object { length: 5, models: Array[5], _byId: Object, _events: Object, _listenId: "l7", _listeners: Object }
