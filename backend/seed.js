import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Election from './models/Election.js';
import Candidate from './models/Candidate.js';

dotenv.config({ path: '.env.local' });

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

const seedData = async () => {
  const electionData = [
    {
      title: 'Presidential Election',
      startDate: new Date('2024-01-01'), // Example start date
      endDate: new Date('2024-01-31'), // Example end date
    },
    {
      title: 'City Mayor Election',
      startDate: new Date('2024-02-01'), // Example start date
      endDate: new Date('2024-02-28'), // Example end date
    },
    {
      title: 'School Board Election',
      startDate: new Date('2024-03-01'), // Example start date
      endDate: new Date('2024-03-31'), // Example end date
    },
  ];

  try {
    // Insert elections into the database
    const insertedElections = await Election.insertMany(electionData);
    console.log('Elections inserted:', insertedElections);

    // Prepare candidates with electionId
    const candidates = [
      { name: 'John Doe', party: 'Party A', img: '/images/candidate1.png', votes: 123, electionId: insertedElections[0]._id },
      { name: 'Jane Smith', party: 'Party B', img: '/images/candidate2.png', votes: 98, electionId: insertedElections[0]._id },
      { name: 'Alice Johnson', party: 'Party C', img: '/images/candidate3.png', votes: 234, electionId: insertedElections[1]._id },
      { name: 'Bob Brown', party: 'Party D', img: '/images/candidate4.png', votes: 180, electionId: insertedElections[1]._id },
      { name: 'Charlie Green', party: 'Party E', img: '/images/candidate5.png', votes: 76, electionId: insertedElections[2]._id },
      { name: 'Diana Blue', party: 'Party F', img: '/images/candidate6.png', votes: 145, electionId: insertedElections[2]._id },
    ];

    // Insert candidates into the database
    const insertedCandidates = await Candidate.insertMany(candidates);
    console.log('Candidates inserted:', insertedCandidates);

    // Update elections with the candidate references
    for (let i = 0; i < insertedElections.length; i++) {
      const electionId = insertedElections[i]._id;
      const candidateIds = insertedCandidates
        .filter(candidate => candidate.electionId.toString() === electionId.toString())
        .map(candidate => candidate._id);
      await Election.findByIdAndUpdate(electionId, { candidates: candidateIds });
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await seedData();
};

run();
