import express from 'express';
import Vote from '../models/Vote.js';
import User from '../models/User.js';
import Candidate from '../models/Candidate.js';
import { addVoteToBlockchain } from '../server.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { voterId, candidateId, electionId } = req.body;

  try {
    const user = await User.findById(voterId);
    if (!user) {
      return res.status(400).json({ message: 'Invalid voter' });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(400).json({ message: 'Invalid candidate' });
    }

    // Ensure the user hasn't already voted in this election
    const hasVoted = user.votes.some(vote => vote.electionId === electionId);
    if (hasVoted) {
      return res.status(400).json({ message: 'You have already voted in this election' });
    }

    // Save the vote to the database
    const vote = new Vote({ voterId, candidateId, electionId });
    await vote.save();

    // Add the vote to the blockchain
    await addVoteToBlockchain(voterId, candidateId, electionId);

    // Update candidate's vote count
    candidate.votes += 1;
    await candidate.save();

    // Update user's vote history
    user.votes.push({ electionId, candidateId });
    await user.save();

    res.status(200).json({ message: 'Vote cast successfully' });
  } catch (error) {
    console.error('Error casting vote:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
