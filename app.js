require("express-async-errors");
require("dotenv").config()
const express = require("express");
const app = express();
const port = 2050 || process.env.PORT;
const cors = require("cors");
const connectDB = require("./db/connectDB");
const errorHandler = require("./middleware/errorHandler");
const notFoundPage = require("./middleware/notFoundPage");
const router = require("./routecontrollers/person");

/**MIDDLEWARE*/
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send("Welcome")
})


app.use("/api", router);

app.get("/", (req, res)=>{
    res.send(`Welcome to Person API`)
})

/**ERROR AND NOT FOUND PAGE */
app.use(notFoundPage);
app.use(errorHandler);

/**START SERVER */
async function startApp() {
    try {
        const db = await connectDB();
        if (db) {
            console.log("connected to the database successfully...");
        }
        app.listen(port, () => console.log(`server listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

startApp();



































