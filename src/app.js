import "dotenv/config";
import express from "express";
import path from "path";

import router from "./router/index.routes.js";

const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;
// const DOMAIN = process.env.DOMAIN;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
	// console.log(`Running at http://${DOMAIN}:${PORT}`);
    console.log("Running")
});
