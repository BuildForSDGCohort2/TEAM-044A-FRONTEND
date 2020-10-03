import dotenv from "dotenv";

dotenv.config();

export default process.env.NODE_ENV === "production"
  ? "https://moneyguard.herokuapp.com/api/v1"
  : "http://localhost:4000/api/v1";
