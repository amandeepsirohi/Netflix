import express from "express";

import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

console.log();

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server ready at http://localhost:" + PORT);
  connectDB();
});
