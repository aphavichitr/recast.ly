class Search extends React.Component {
  constructor (props) {
    super(props);
  }
  
  fxn(e) {  
    this.props.search({key: window.YOUTUBE_API_KEY, q: this._vids.value, maxResults: 10}, (videos) => {
      this.props.unmount();
      this.props.changer(videos);     
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" ref={(input) => this._vids = input} onChange={_.debounce(this.fxn.bind(this), 500)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
