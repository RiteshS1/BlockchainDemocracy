import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  votes: [
    {
      electionId: {
        type: String,
        required: true,
      },
      candidateId: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    }
  ],
});

const User = mongoose.model('User', userSchema);
export default User;
