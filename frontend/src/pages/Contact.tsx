import React from 'react';

const Contact = () => {
  return (
    <div className=" text-white container max-w-lg mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-center mb-4">
        Have questions or need support? We’re here to help! Reach out to us anytime.
      </p>
      <p className="text-lg text-center mb-4">
        You can get in touch with us at <a href="mailto:email@example.com" className="text-blue-500">email@example.com</a>.
      </p>
      <p className="text-lg text-center mb-4">
        We value your feedback and inquiries, as they help us enhance our platform and better serve our community.
      </p>
    </div>
  );
};

export default Contact;
