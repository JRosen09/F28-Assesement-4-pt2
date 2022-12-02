const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getLuckyNumber,
  getMotivated,
  addMotivation,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/luckynumber", getLuckyNumber);
app.get("/api/motivated", getMotivated);
app.post("/api/addMotivation", addMotivation);

app.listen(4000, () => console.log("Server running on 4000"));
