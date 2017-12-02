import config, {nodeEnv, logStars} from "./config";
import express from "express";
import ApiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import serverRender from "./serverRender";

// SET UP SERVER
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public")
}));

server.get("/", (req, res) => {
    serverRender().then(content => {
        res.render("index", {content});
    }).catch(console.error);
});


// Express handles correlation based on file within /public folder
// (ex: localhost:8080/about.html === /public/about.html)
server.use(express.static("public"));
// Express handles correlation based on filenames within /api folder
server.use("/api", ApiRouter);

// For use with EJS Engine used in ./views
server.set("view engine", "ejs");

server.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});
