import React, { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [isOrganization, setIsOrganization] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the form, for example, sending data to a backend server
    // After the submission is successful, you can set the transactionHash state with the transaction hash
    // received from the backend or any other message indicating the success
    // For demonstration purpose, I'm just setting a static message
    setTransactionHash('Transaction submitted successfully!');
  };

  return (
    <div className="max-w-md mx-auto bg-transparent border rounded-lg shadow-md  px-8 pt-6 pb-8 mb-4 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="organization" className="flex items-center">
            <input type="checkbox" id="organization" checked={isOrganization} onChange={(e) => setIsOrganization(e.target.checked)} className="mr-2" />
            <span className="text-white">Is Organization?</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
      {transactionHash && (
        <div className="mt-4 text-center text-green-600">
          {transactionHash}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
