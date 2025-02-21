import React from 'react'

export default function LoginSignup() {
  return (
    <div className='p-8 m-6 max-w-lg mx-auto bg-yellow-300 rounded-xl shadow-lg'>
      {/* Sign Up Section */}
      <div>
        <h1 className='text-2xl font-semibold text-center mb-6'>Sign Up</h1>
        
        <div className='space-y-4'>
          {/* Input Fields */}
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        {/* Continue Button */}
        <button className='w-full mt-4 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all'>
          Continue
        </button>
      </div>

      {/* Login Prompt */}
      <div className='mt-4 text-center'>
        <p className='text-sm'>Already have an account?</p> 
        <span className='text-red-600 font-semibold cursor-pointer hover:text-red-500'>Log in</span>
      </div>

      {/* Terms & Conditions */}
      <div className='mt-4 flex items-center justify-center'>
        <input type="checkbox" className='mr-2'/>
        <p className='text-sm'>By continuing, you agree to the terms and conditions.</p>
      </div>
    </div>
  )
}
