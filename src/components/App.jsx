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


  componentWillMount() {
    //this.setState({videos: window.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 10}, () => {})});
    console.log('suh: ', this.props.searchYouTube);
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, q: 'cats', maxResults: 10}, (videos) => {
      this.setState({
        videos: videos,
        current: videos[0] 
      });
    });
  }

  componentDidMount() {
    this._timer = setInterval(
      //this._fetchYT(),
      () => this.props.searchYouTube({key: window.YOUTUBE_API_KEY, q: 'cats', maxResults: 10}, (videos) => {
        this.setState({
          videos: videos,
          current: videos[0] 
        });
      }),
      5000
    );

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
