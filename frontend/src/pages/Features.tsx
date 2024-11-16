import React from 'react';

const Features = () => {
  return (
    <div className="container text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Features of BlockChain Democracy</h1>
      <ul className="list-disc pl-5">
        <li className="mb-2">Decentralized and secure voting system, ensuring that every vote is counted accurately without tampering.</li>
        <li className="mb-2">Real-time vote counting and transparency, allowing voters to track the status of their votes instantly.</li>
        <li className="mb-2">User-friendly interface for both candidates and voters, designed to simplify the voting process.</li>
        <li className="mb-2">Customizable election categories, giving organizations the flexibility to create tailored elections for their needs.</li>
      </ul>
      <p className="mt-4 text-lg">
        Our platform is built with cutting-edge technology to promote fairness, accessibility, and integrity in elections.
      </p>
    </div>
  );
};

export default Features;
