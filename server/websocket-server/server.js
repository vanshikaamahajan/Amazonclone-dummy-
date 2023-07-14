const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });


wss.on('connection', (ws) => {
    console.log('A client connected');
  
    // Handle incoming messages from the client
    ws.on('message', (message) => {
      console.log('Received message:', message);
    });
  
    // Handle client disconnection
    ws.on('close', () => {
      console.log('A client disconnected');
    });
  });