import TweetList from "./components/TweetList";

const dummyTweets = [
	{ id: 0, content: "Tweet 1", likeCount: 2 },
	{ id: 1, content: "Tweet 2", likeCount: 4 },
	{ id: 2, content: "Tweet 3", likeCount: 6 },
];

function App() {
	return (
		<>
			<TweetList tweets={dummyTweets} />
		</>
	);
}

export default App;
