function Hover3DImg({imgUrl, imgAlt}) {
	return (
		<div className="hover-3d">
			<figure className="rounded-lg">
				<img
					src={`${imgUrl}`}
					alt={`${imgAlt}`}
				/>
			</figure>
			{/* 8 empty divs needed for the 3D effect */}
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Hover3DImg;