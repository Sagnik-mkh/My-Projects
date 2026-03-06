import express from "express";
import emailRouter from "./routes/emailRoutes";
import cors from "cors";

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", emailRouter);

app.get("/ping", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
