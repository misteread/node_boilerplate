import express from "express";
import type { Express, Request, Response } from "express";
import { engine } from "express-handlebars";
import path from "node:path";

const app: Express = express();

const PORT = process.env.PORT || 3000;

const hostname = "0.0.0.0";

app.use(express.static(path.resolve("public")));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", function (req: Request, res: Response) {
    res.status(200).render("home");
});

app.get("/contact", function (req: Request, res: Response) {
    res.send("data is sent");
});

app.use((req: Request, res: Response) => {
    return res.status(404).send(":) error");
});

app.use((req: Request, res: Response) => {
    res.status(500).send("(: sorry internal server error");
});

app.listen(PORT, function () {
    console.log(`server is running on http://${hostname}:${PORT}`);
});
