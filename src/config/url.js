import dotenv from "dotenv";

dotenv.config();

const API_URL =
  process.env.HOME_URL === "production"
    ? "https://moneyguard.herokuapp.com/api/v1"
    : "http://localhost:4000/api/v1";

export default API_URL;
