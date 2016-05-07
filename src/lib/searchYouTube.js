var searchYouTube = (options, callback) => {
  var results = [];
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
    data: options,
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      callback(data.items);
    }
  });

};


window.searchYouTube = searchYouTube;
