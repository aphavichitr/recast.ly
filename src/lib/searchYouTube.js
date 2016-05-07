var searchYouTube = (options, callback) => {
  var results = [];
//console.log('options', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
    data: options,
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      results.push(data.items);
      console.log('data', data.items);
      callback(data.items);
    }
  }).done(function(vals) {
    //console.log("vals:", vals);
    return results.push(vals);
    //console.log(results);
  });

  
};


window.searchYouTube = searchYouTube;
