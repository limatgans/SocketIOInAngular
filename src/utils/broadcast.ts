import * as socClient from "socket.io-client";
const clientBroadcast = ({message, title}) => {
    let socket = socClient();
    socket.io.uri = "http://localhost:3000";
    socket.io.connect();

    // if there is a non-empty message and a socket connection
    if (message && title) {
        // tell server to execute 'new message' and send along one parameter
        socket.emit('new message', {message, title});
    }

}
export { clientBroadcast };