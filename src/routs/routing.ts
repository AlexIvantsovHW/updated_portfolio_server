import * as i from "./imports";
export const router = i.express.Router();
const pool = new i.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: "10032018BakI",
  port: Number(process.env.DB_PORT),
});

router.use("/work", i.workRouter(pool));
