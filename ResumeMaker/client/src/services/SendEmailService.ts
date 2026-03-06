import axios from "axios";

export default async function SendEmailService(
	email: string,
	password: string,
) {
	try {
		const response = await axios.post(
			"http://localhost:3001/api/send-email",
			{
				email,
				password,
			},
		);

		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Email request failed:", error);
		throw error;
	}
}
