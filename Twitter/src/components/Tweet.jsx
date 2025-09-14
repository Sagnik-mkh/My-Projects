function Tweet({ content, likeCount }) {
	return (
		<>
			<div>
				<div>
					{content}
				</div>
				<div>
					{likeCount}
				</div>
			</div>
		</>
	);
}

export default Tweet;
