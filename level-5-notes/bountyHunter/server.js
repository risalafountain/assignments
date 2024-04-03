const express = require("express")
const app = express()

//Middleware (for every request)
app.use(express.json())
app.use("/bounty", require("./routes/bountyRouter"))

//server listen
app.listen(9000, () => console.log("Server is running on Port 9000"))