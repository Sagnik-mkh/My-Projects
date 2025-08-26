import { useState } from "react";
import FetchCoinData from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import Button from "../Button/Button";
import store from "../../store/store";

function CoinTable() {
	const [page, setPage] = useState(1);
	const { currency } = store();
	const { isPending, isError, data, error, refetch } = useQuery({
		queryKey: ["coin", page, currency],
		queryFn: () => FetchCoinData(page, currency),
		// retry: 2,
		// retryDelay: 1000,
		// cacheTime: 2 * 60 * 1000,
		staleTime: 2 * 60 * 1000,
	});

	return (
		<>
			<div className="container grid grid-flow-row px-4 mx-auto my-8">
				{/* Header */}
				<ul className="grid grid-cols-4 text-xl font-semibold text-center rounded-t-lg bg-primary text-primary-content">
					<li className="p-2 border-r-2 border-secondary-content">
						Coin
					</li>
					<li className="p-2 border-r-2 border-secondary-content">
						Price
					</li>
					<li className="p-2 border-r-2 border-secondary-content">
						24hr Change
					</li>
					<li className="p-2">Market Cap</li>
				</ul>
				{isPending && (
					<div className="flex justify-center my-8">
						<div className="btn btn-accent btn-lg">
							<span className="mr-2 loading loading-spinner loading-lg text-accent-content"></span>
							<span>Loading...</span>
						</div>
					</div>
				)}
				{isError && (
					<div className="flex justify-center my-8">
						<div className="flex flex-col items-center justify-center alert alert-error alert-soft w-fit">
							<i className="fa-solid fa-triangle-exclamation"></i>
							<span>{error.message}</span>
							<Button
								text={"Retry"}
								color={"warning"}
								style={"outline"}
								onClickHandler={() => refetch()}
							/>
						</div>
					</div>
				)}
				{/* Data */}
				{!isPending &&
					!isError &&
					data &&
					data.map((coin) => {
						return (
							<ul
								key={coin.id}
								className="grid grid-cols-4 p-2 text-center border-b hover:bg-base-200"
							>
								<li className="flex items-center gap-2">
									<img
										src={coin.image}
										alt={coin.name}
										className="w-8 h-8"
									/>
									<span>{coin.name}</span>
									<span className="text-gray-500 uppercase">
										{coin.symbol}
									</span>
								</li>
								<li>
									{currency === "usd"
										? "$"
										: currency === "inr"
										? "inr"
										: `${currency} `}
									{coin.current_price.toLocaleString()}
								</li>
								<li
									className={
										coin.price_change_percentage_24h > 0
											? "text-green-500"
											: "text-red-500"
									}
								>
									{coin.price_change_percentage_24h.toFixed(
										2
									)}
									%
								</li>
								<li>${coin.market_cap.toLocaleString()}</li>
							</ul>
						);
					})}
				{/* Refresh */}
				<div className="flex justify-center mt-4">
					<Button
						size={"sm"}
						color={"info"}
						style={"outline"}
						text={"Refresh"}
						onClickHandler={() => refetch()}
						isDisabled={isPending || isError}
					>
						<i className="fa-solid fa-arrows-rotate mr-2"></i>
					</Button>
				</div>
				{/* Pagination */}
				<div className="flex justify-center gap-4 mt-8">
					<Button
						color={"secondary"}
						text={"Prev"}
						isDisabled={page === 1}
						onClickHandler={() => setPage(page - 1)}
					/>
					<Button
						color={"secondary"}
						text={"Next"}
						onClickHandler={() => setPage(page + 1)}
					/>
				</div>
			</div>
		</>
	);
}

export default CoinTable;
