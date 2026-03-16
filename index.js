const express = require("express");
const cors = require("cors");
require("dotenv").config();

const attractionsRoutes = require("./routes/attractions");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/attractions", attractionsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Attraction API running" });
});

const PORT = process.env.PORT || 3333;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;