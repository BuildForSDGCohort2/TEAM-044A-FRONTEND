import dotenv from "dotenv";

dotenv.config();

export default process.env.API_URL || "http://localhost:4000/api/v1";
