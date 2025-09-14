import Tweet from "./Tweet";

function TweetList({ tweets }) {
	return (
		<>
			<ul>
				{tweets.map((tweet) => {
					return (
						<li key={tweet.id
						}>
							<Tweet
								content={tweet.content}
								likeCount={tweet.likeCount}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default TweetList;
