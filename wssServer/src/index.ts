console.log('hello there general kenobi')

import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
console.log(wss)

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.send('Websocket connection established');

    ws.on('message', function message(data) {
        console.log('received: %s', data);        
        ws.send(("data recieved " + data));
    });
});