const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const app = express();

dotenv.config();

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const property = require("./routes/propertyRoutes");
const contact = require("./routes/contactRoutes");

app.use("/api/v1", property);
app.use("/api/v1", contact);

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT);
});
