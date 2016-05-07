// TODO: Render the `App` component to the DOM
ReactDOM.render(
	<App searchYouTube={window.searchYouTube} apikey={window.YOUTUBE_API_KEY}/>, document.getElementById('app')
);