import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));

//create routes (web addresses for web content)
app.get("/home", (req, res) => {
    res.send("Hello, from Express.js!");
})

app.listen(port, () => console.log("Web server started on port 3000"));