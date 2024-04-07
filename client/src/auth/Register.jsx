import React, { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [party, setParty] = useState('');
  const [address, setaddress] = useState('');
  const [isOrganization, setIsOrganization] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setTransactionHash('Transaction submitted successfully!');
  };

  return (
    <div className=" flex flex-col mx-auto bg-transparent m-28 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Register</h2>
     <div className="flex gap-36">
     <form onSubmit={handleSubmit} className="space-y-4 border p-10 rounded-md flex flex-col">
        <h2 className='text-center text-2xl'>User </h2>
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black" />
        </div>
        <div>
          <label htmlFor="organization" className="flex items-center">
            <input type="checkbox" id="organization" checked={isOrganization} onChange={(e) => setIsOrganization(e.target.checked)} className="mr-2" />
            <span className="text-white">Is Organization?</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ">Register</button>
      </form>
      <form onSubmit={handleSubmit} className="space-y-4 border p-10 rounded-md flex flex-col">
      <h2 className='text-center text-2xl'>Party</h2>
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input type="text" id="name" value={party} onChange={(e) => setParty(e.target.value)} required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black" />
        </div>
        <div>
        <label htmlFor="address" className="block text-white">Address</label>
          <input type="text" id="name" value={address} onChange={(e) =>setaddress(e.target.value)} required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-black" />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </form>
     </div>
      {transactionHash && (
        <div className="mt-4 text-center text-green-600">
          {transactionHash}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
