"use client";

import LoginButton from "@/components/Ui/LoginButton";
import { useState } from "react";

function LoginContainer() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<>
			<input
				type="email"
				className="input input-primary"
				placeholder="Enter your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				className="input input-primary"
				placeholder="Enter your password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<LoginButton email={email} password={password} />
		</>
	);
}

export default LoginContainer;
