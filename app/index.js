const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const { Server } = require('socket.io')
const { createServer } = require("http");

const router = require('./routes/route')
const app = express();
const httpServer = createServer(app);
const { MORGAN_FORMAT } = require('../config/application')
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(`New socket io connection ${socket.id}`)
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan(MORGAN_FORMAT))
app.use(cors())
app.options('*', cors()) 
router.apply(app)

module.exports = httpServer