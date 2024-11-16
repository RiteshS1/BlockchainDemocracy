import express from 'express';
import Election from '../models/Election.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const elections = await Election.find().populate('candidates');
    res.status(200).json(elections);
  } catch (error) {
    console.error('Error fetching elections:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 