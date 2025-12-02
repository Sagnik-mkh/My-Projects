import React from "react";
import ContentLoader from "react-content-loader";

const PokeCardSkeleton = (props) => (
	<div className="w-full max-w-[260px] rounded-2xl">
		<ContentLoader
			speed={1.4}
			width={260}
			height={230}
			viewBox="0 0 260 230"
			backgroundColor="#dcdce6"
			foregroundColor="#efeff4"
			{...props}
		>
			{/* Card */}
			<rect x="0" y="0" rx="22" ry="22" width="260" height="230" />

			{/* Image */}
			<rect x="20" y="20" rx="14" ry="14" width="220" height="120" />

			{/* Name */}
			<rect x="20" y="155" rx="8" ry="8" width="130" height="18" />

			{/* ID pill */}
			<rect x="170" y="148" rx="10" ry="10" width="70" height="26" />

			{/* Type 1 */}
			<rect x="20" y="190" rx="12" ry="12" width="80" height="22" />

			{/* Type 2 */}
			<rect x="110" y="190" rx="12" ry="12" width="80" height="22" />
		</ContentLoader>
	</div>
);

export default PokeCardSkeleton;
