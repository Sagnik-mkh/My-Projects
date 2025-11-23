import Tweet from "./Tweet";

// function to generated each tweet
function GenTweet(tweet) {
	return (
		<li key={tweet.id}>
			<Tweet content={tweet.content} likeCount={tweet.likeCount} />
		</li>
	);
}

// Takes a prop "tweets" which is an array of objects
function TweetList({ tweets }) {
	return (
		<>
			{/* rendering tweets using map from "tweets" array */}
			<ul>{tweets.map(GenTweet)}</ul>
		</>
	);
}

export default TweetList;
