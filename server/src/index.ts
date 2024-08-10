import cors from "cors";
import express, { type Request, type Response } from "express";
import users from "./routes/users";

const app = express();
const PORT = process.env.PORT || 5001;

//Middleware
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
	return res.json({ Message: "Running ok" });
});

app.use("/users", users);

app.listen(PORT, () => {
	console.log(`Running at https://localhost:${PORT}`);
});
