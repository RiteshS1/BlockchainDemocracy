import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-6 mt-4">
      <h1 className="text-3xl md:text-6xl font-bold mb-6 text-center">About BlockChain Democracy</h1>
      <p className="text-lg md:text-xl text-center max-w-3xl mb-8">
        BlockChain Democracy is a decentralized voting platform designed to ensure fair and transparent elections with the power of blockchain technology. Our system leverages the immutability and transparency of blockchain to offer a secure and auditable election process.
        <br /><br />
        By combining decentralized technology and cryptographic security, we empower voters to cast their ballots anonymously while ensuring the integrity of the results. Our mission is to make voting accessible, transparent, and tamper-proof, paving the way for a new era of digital democracy.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Our Model</h2>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        The structure of BlockChain Democracy ensures that all votes are securely stored on a distributed ledger, preventing fraud, double voting, and unauthorized access. Here's a simple illustration of the blockchain technology we use:
      </p>

      {/* Adding a simple blockchain image */}
      <div className="flex justify-center items-center w-full max-w-4xl mb-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-cbJWtAPhwR2a0r-puKg2KBVr4t06m7jBQ&s" alt="Blockchain Diagram" className="w-[25] h-[25] rounded-lg shadow-lg" />
      </div>

      <p className="text-lg md:text-xl text-center max-w-2xl mt-8">
        Our platform features:
        <ul className="list-disc list-inside">
          <li>Secure voter registration</li>
          <li>Blockchain-based vote tracking</li>
          <li>Real-time result verification</li>
          <li>Anonymous voting with verifiable results</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
