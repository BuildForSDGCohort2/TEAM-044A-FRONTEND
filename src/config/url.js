import dotenv from "dotenv";

dotenv.config();

export default process.env.HOME_URL === "production"
  ? "https://moneyguard.herokuapp.com/api/v1"
  : "http://localhost:4000/api/v1";
