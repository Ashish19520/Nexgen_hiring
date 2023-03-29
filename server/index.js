import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import hotels from "./routes/hotels.js"
import bookings from "./routes/bookings.js"
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/api',hotels);
app.use('/api',bookings);
const CONNECTIONSRTING = process.env.CONNECTION_URL;



mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECTIONSRTING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))})
  .catch((err) => {console.log(err);});