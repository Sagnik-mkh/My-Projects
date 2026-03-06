import mongoose from "mongoose";
import path from "node:path";

const { Schema } = mongoose;

const navBarSchema = new Schema(
	{
		title: {
			type: String,
			path: String,
			required: true,
		},
		
	}
)