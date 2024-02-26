import { Server } from "socket.io";

// This Api has to be called explicitly
const SocketHandler =  (req, res) => {
    // This step is beacuse if we create new server everytime then the instance of the server will be recreated again and all of the memory would be lost. So,basiclly this step is for avoiding recreation of server
    console.log("CALLED API"); // testing
    if (res.socket.server.io) {
        console.log("socket already running")
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io
    
        io.on('connection', (socket) => {
            console.log("server is connected")
        })
    }
    res.send();
}

export default SocketHandler;