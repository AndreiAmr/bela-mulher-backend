import express from "express";
import { mainRoutes } from "./infra/routes";

const app = express();

app.use(express.json());

app.use("/api", mainRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
