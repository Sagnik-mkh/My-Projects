import TweetList from "./components/TweetList";

// making a array of objects as tweets list
// object contains --> id, content, like count
const dummyTweets = [
	{ id: 0, content: "We have new twitter called as threads", likeCount: 2 },
	{ id: 1, content: "What should we post", likeCount: 4 },
	{ id: 2, content: "What is up with the tech community", likeCount: 6 },
];

function App() {
	return (
		<>
			<TweetList tweets={dummyTweets} /> {/** passing the tweets array to "TweerList" component */}
		</>
	);
}

export default App;
