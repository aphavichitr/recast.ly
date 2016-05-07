class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      current: window.exampleVideoData[0], //set this to current videp
      videos: window.exampleVideoData//all the videos
    };
  }

  // onVideoClick() {
  //   this.state.videos.push(props.videos);
  // }

  handleClick(param) {
    console.log(param);
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
