const express = require("express")
const { Mongodb } = require("./connection")
const path = require("path")
const model = require("./model/url.model");
const cookieparser = require("cookie-parser")

const bodyparser = require("body-parser")
const { ReqResMdl } = require("./middleware/requestmiddlewere")
const { AuthenticateToken,restrictuserRole } = require("./middleware/auth")

// Routers
const userRouter = require("./routes/user.router")
const urlRouter  = require("./routes/url.router")
const staticRouter = require("./routes/static.Router") 


const app = express()
const port =3000

// Template Engine
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


//Middleware
app.use(bodyparser.json())
app.use(ReqResMdl("request.txt"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())


// Mongodb Connection
Mongodb('mongodb://localhost:27017/short_url') 
    .then(() => console.log("Mongodb is connected!"))
    .catch((err) => console.log("Error: ", err)) 


    app.use('/url', AuthenticateToken, restrictuserRole(["NORMAL"]), urlRouter);
app.use('/', staticRouter)
app.use('/user', userRouter)

 
app.listen(port, ()=> console.log(`Server is runing at locahost:${port}`))