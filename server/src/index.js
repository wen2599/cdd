// server/src/index.js
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: { origin: "*" }
});

// 基础路由
app.get('/', (req, res) => {
  res.send('锄大地服务器运行中');
});

// WebSocket 连接
io.on('connection', (socket) => {
  console.log(`用户连接: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`用户断开: ${socket.id}`);
  });
});

// 启动服务
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`服务运行在端口 ${PORT}`);
});
