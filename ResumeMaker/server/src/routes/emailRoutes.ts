import express from "express";
import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER } from "../config/serverConfig";
import path from "node:path";

const router = express.Router();

const filePath = path.resolve(
	"/Users/sagnikmukhopadhyay/Desktop/Career/Resume/Sagnik Resume v2.pdf",
);

router.post("/send-email", async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(EMAIL_USER, EMAIL_PASS);
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: EMAIL_USER,
				pass: EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: EMAIL_USER,
			to: "sagnikm003@gmail.com",
			subject: "Test Email",
			text: `This is a test email`,
			attachments: [
				{
					filename: "pdf",
					path: filePath,
				},
			],
		});

		console.log("Email sent successfully");

		return res.status(201).json({
			message: "Email sent successfully",
			sucess: true,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return res.status(500).json({
			message: "Failed to send email",
			success: false,
		});
	}
});

export default router;
