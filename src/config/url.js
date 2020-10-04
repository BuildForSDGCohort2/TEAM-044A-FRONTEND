import dotenv from "dotenv";

dotenv.config();

module.exports =
  process.env.NODE_ENV === "production"
    ? "https://moneyguard.herokuapp/api/v1"
    : "http://localhost:4000/api/v1";
