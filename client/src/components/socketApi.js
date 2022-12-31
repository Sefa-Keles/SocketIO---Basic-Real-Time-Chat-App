import io from 'socket.io-client'

let socket;

export const init = () => {
    console.log('Connection is initializing...');

    socket = io("http://localhost:3000", {
        transports: ["websocket"]
    });

    socket.on('connect' , () => console.log('Connection established.'))
}

export const sendMessage = (inputText) => {
    if(socket) socket.emit('new-message', (inputText))
     
}

export const subscribeMessage = (cb) => {
    if(!socket) return;
    socket.on('receive-message', (message) => cb(message))
}

export const pastMessages = (cb) => {
    if(!socket) return;
    socket.on('message-list', (pastMessageData) => cb(pastMessageData))
}