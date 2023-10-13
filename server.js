import express from "express";
import cors from "cors";

const app = express();
// cors is used for creating remote connections of backend and front end for an app
app.use(cors());

// so app.get means it will look for whether the request was of getType
// Since we were using /getData inside frontend we send back this response
// when it was made

app.get("/getData", (req, res) => {
    res.send("We got connected");
})

app.listen(5000, () => console.log("Server is running"));