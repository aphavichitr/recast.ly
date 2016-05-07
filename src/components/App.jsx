class App extends React.Component {
  
  constructor(props) {
    super(props);
    //console.log('api', window.YOUTUBE_API_KEY);
    //console.log('youtube', this._fetchYT());
    this.state = {
      current: window.exampleVideoData[0], //set this to current video
      videos: []
    };
  }


  _fetchYT() {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
      data: {key: window.YOUTUBE_API_KEY, q: 'cats', maxResults: 10},
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log('data: ', data.items);

        console.log('state', this.state.videos);
        var x = this.state.videos;
        x = x.concat(data.items);
        this.setState({videos: x});
      }
    });
  }

  addToState(data) {
    this.setState({
      videos: data
    });
  }

  componentWillMount() {
    //this.setState({videos: window.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 10}, () => {})});
    console.log('suh: ', this.props.searchYouTube);
    //this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 10}, this.addToState.bind(this));
    
    //this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 10}, this.addToState);

    this._fetchYT();
      // console.log('done');
  }

  componentDidMount() {
    this._timer = setInterval(
      this._fetchYT(),
      //() => this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 10}, this.addToState),
      5000
    );
    //console.log('HALOO');
   // console.log('interval', this.props.searchYouTube);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }


  handleClick(param) {
    //console.log(param);
    this.setState({
      current: param.video
    });
  }

  render() {  

    var style = {
      width: '1000px'
    };
    return (
      <div style={style}>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} state={this.state} clickfxn={this.handleClick.bind(this)}/>
        </div>
      </div>
    );
    
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
