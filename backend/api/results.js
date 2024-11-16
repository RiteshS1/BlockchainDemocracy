import express from 'express';
import Candidate from '../models/Candidate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    const results = candidates.map(candidate => ({
      candidateName: candidate.name,
      party: candidate.party,
      votes: candidate.votes,
    }));
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
