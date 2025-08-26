import { useParams } from "react-router";

function CoinDetails() {
	const { coinId } = useParams();

	return <div>CoinDetails{coinId}</div>;
}
export default CoinDetails;
