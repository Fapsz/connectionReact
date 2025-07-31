import React, { useState} from 'react'

function Signup() {
    let [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    const handleChange = (joe) => {
        // const { name, value } = e.target;
        setFormData({
            ...formData,
            [joe.target.name]: joe.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await fetch('https://blogbackend-d377.onrender.com/user/register', {
            const response = await fetch('https://blogbackend-d377.onrender.com/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Signup successful:', data);
        } catch (error) {
            console.error('Error during signup:', error);
        }

        // response();

    }
    
  return (
    <div className=' h-screen flex items-center justify-center bg-black text-white flex-col gap-4'>
        <h1 className=' text-4xl font-bold'>Signup From</h1>
        <form onSubmit={handleSubmit} className=' flex flex-col space-y-4 mt-8 w-80'>
            <label className='flex flex-col'>
                Full Name:
                <input onChange={handleChange} type="text"  name="fullname" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' required />
            </label>
            <label className='flex flex-col'>
                Email:
                <input onChange={handleChange} type="text" name="email" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' required />
            </label>
            <label className='flex flex-col'>
                Password:
                <input onChange={handleChange}  type="text" name="password" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' required />
            </label>
            <button type='submit' className='mt-4 p-2 bg-blue-600 rounded'>Signup</button>

        </form>
    </div>
  )
}

export default Signup