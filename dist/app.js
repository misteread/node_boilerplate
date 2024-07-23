import express from "express";
import { engine } from "express-handlebars";
import path from "node:path";
const app = express();
const PORT = process.env.PORT || 3000;
const hostname = "0.0.0.0";
app.use(express.static(path.resolve("public")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.get("/", function (req, res) {
    res.status(200).render("home");
});
app.get("/contact", function (req, res) {
    res.send("data is sent");
});
app.use((req, res) => {
    return res.status(404).send(":) error");
});
app.use((req, res) => {
    res.status(500).send("(: sorry internal server error");
});
app.listen(PORT, function () {
    console.log(`server is running on http://${hostname}:${PORT}`);
});
