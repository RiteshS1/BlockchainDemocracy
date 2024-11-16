import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Candidate {
  _id: string;
  name: string;
  party: string;
  img: string;
  votes: number;
}

interface Election {
  _id: string;
  title: string;
  candidates: Candidate[];
}

const Voting: React.FC = () => {
  const [elections, setElections] = useState<Election[]>([]);
  const [selectedElection, setSelectedElection] = useState<Election | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch elections and live results from backend
  const fetchElections = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/elections');
      if (response.data && response.data.length > 0) {
        setElections(response.data);
      } else {
        setElections([]);
      }
    } catch (error) {
      console.error('Error fetching election data:', error);
      setElections([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElections();
  }, []);

  const handleVote = async (candidateId: string) => {
    try {
      const voterId = localStorage.getItem('userId');
      const electionId = selectedElection?._id; // Get the election ID from the selected election
      const response = await axios.post('/vote', { voterId, candidateId, electionId }); // Include electionId
      await fetchElections(); // Refresh data to update vote count
    } catch (error) {
      console.error('Error casting vote:', error);
      alert('Failed to cast vote. Please try again.');
    }
  };

  if (loading) return <p>Loading election data...</p>;

  return (
    <div>
      {elections.map(election => (
        <div key={election._id}>
          <h2>{election.title}</h2>
          {election.candidates.map(candidate => (
            <div key={candidate._id}>
              <p>{candidate.name} - Votes: {candidate.votes}</p>
              <button onClick={() => handleVote(candidate._id)}>Vote for {candidate.name}</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Voting;
