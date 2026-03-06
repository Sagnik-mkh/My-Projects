"use client";

import SendEmailService from "@/services/SendEmailService";

type Props = {
	email: string;
	password: string;
};

export default function LoginButton({ email, password }: Props) {
	async function onClickHander() {
		try {
			const response = await SendEmailService(email, password);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<button
			type="button"
			className="btn btn-primary"
			onClick={onClickHander}
		>
			Submit
		</button>
	);
}
