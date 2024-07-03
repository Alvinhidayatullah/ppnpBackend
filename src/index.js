import express from "express";
import { routes } from "./route.js";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
