import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  electionId: {
    type: String,
    required: true,
  },
  candidateId: {
    type: String,
    required: true,
  },
  voterId: {
    type: String,
    required: true,
  },
});

const Vote = mongoose.model('Vote', voteSchema);
export default Vote;
