import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white sm:flex-row">
      <h1 className="text-4xl md:text-6xl font-bold m-4 text-center">Welcome <br />to <br /> BlockChain Democracy<span className='text-slate-400'>(BCD)</span></h1>
      <p className="text-xl md:text-2xl text-start max-w-2xl">
        Your trusted platform for decentralized voting! <br />Empowering the future of transparent and secure elections with cutting-edge blockchain technology. 
        <br /><hr />Join us and experience the power of democracy in your hands.
      </p>
    </div>
  );
};

export default Home;
