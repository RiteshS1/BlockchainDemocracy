import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import signupRoutes from './api/signup.js';
import loginRoute from './api/login.js';
import voteRoutes from './api/vote.js';
import resultRoutes from './api/results.js';
import electionRoutes from './api/election.js';
import { exec } from 'child_process';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;


const server = http.createServer(app);
const io = new Server(server);

// Function to add a vote via the C++ blockchain
const addVoteToBlockchain = async (voterId, candidateId, electionId) => {
  return new Promise((resolve, reject) => {
    exec(`./cpp_blockchain/Block.exe ${voterId} ${candidateId} ${electionId}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing blockchain: ${error}`);
        return reject(error);
      }
      resolve(stdout);
    });
  });
};

export { addVoteToBlockchain };

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoute);
app.use('/api/vote', voteRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/elections', electionRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // When a vote is submitted, emit new results to all clients
  socket.on('voteSubmitted', () => {
    io.emit('newResults'); // Notify all clients to update results
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start server with Socket.IO
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
