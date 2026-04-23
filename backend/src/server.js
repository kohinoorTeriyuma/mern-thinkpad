import express from "express";
import dotenv from "dotenv";
import dns from "dns";

import notesRoute from "./routes/notes.route.js";
import connectDB from "./config/db.js";
import { connect } from "mongoose";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";

dotenv.config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(rateLimiter);

connectDB();

//routes
app.use("/api/notes", notesRoute);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
