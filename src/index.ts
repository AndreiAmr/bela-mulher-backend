import express from "express";
import { createUserRouter } from "./infra/routes";

const app = express();

app.use(express.json());
console.log("Rotas linkadas com sucesso!");
app.use(createUserRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
