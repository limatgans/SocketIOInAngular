import { } from "socket.io-client";
const clientBroadcast = ({message, title}) => {
    const socket = io();

    // if there is a non-empty message and a socket connection
    if (message && title) {
        // tell server to execute 'new message' and send along one parameter
        socket.emit('new message', {message, title});
    }

}
export { clientBroadcast };