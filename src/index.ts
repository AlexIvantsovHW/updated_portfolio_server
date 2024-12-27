import bodyParser from "body-parser";
import * as i from "./imports";
import cors from "cors";
i.dotenv.config();
const app = i.express();
const PORT = Number(process.env.PORT) || 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(i.express.json());
app.use(i.router);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
