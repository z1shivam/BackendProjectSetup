import express from "express";
import { testRouter } from "./routes/test.route.js";

const app = express();

// middleware to run at incoming request.
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// handling router in expressJS
app.use("/test", testRouter);

// middleware to run at response
app.use(errorHandler);

export { app };

