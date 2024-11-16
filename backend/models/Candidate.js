import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  img: {
    type: String,
  },
  electionId: {
    type: String,
    required: true,
  },
});

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;
