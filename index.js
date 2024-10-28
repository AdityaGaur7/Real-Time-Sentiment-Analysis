const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
const server = http.createServer(app);


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));


const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", 
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('disconnect', () => console.log('Client disconnected'));
});

async function fetchNewsArticles() {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
        response.data.articles.forEach(article => {
            const data = {
                message: article.title,
                sentimentScore: Math.random() * 2 - 1 
            };

           
            io.emit('sentimentData', data);
        
            
        });
    } catch (error) {
        console.error(error);
    }
}

setInterval(fetchNewsArticles, 10000);

server.listen(4000, () => console.log('Server listening on port 4000'));
