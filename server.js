import express from "express";
import cors from "cors";

import api from "#config/api";
import v1API from "#routes/api/v1/index";

const app = express();

app.use(cors({ origin: "*" }));
app.set("json spaces", 2);

app.get("/", async ({ res }) => {
  const { status, statusText } = await api();

  res.json({ statusServerLK21: status, statusText });
});

app.use("/api/v1", v1API);

app.listen(process.env.PORT || 8000, () => console.log("Server is running..."));
