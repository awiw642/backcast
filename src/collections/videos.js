var Videos = Backbone.Collection.extend({
  // url: 'src/data/exampleVideoData.js',
  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.model.select); // placeholder
  },

  search: function(query) {
    // data: {query, maxResults, key: window.YOUTUBE_API_KEY}
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });

  },
  // Managed to get video data
  // How do we create video model based on the data?

  parse: function (response) {
    return response.items;
  }

});
