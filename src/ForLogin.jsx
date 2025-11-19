// import React, { useState} from 'react'


// function    ForLogin() {
//         let [formData, setFormData] = useState({
//             email: '',
//             password: ''
//         });
    
//         const handleChange = (joe) => {
//             // const { name, value } = e.target;
//             setFormData({
//                 ...formData,
//                 [joe.target.name]: joe.target.value
//             });
//         }
    
//         const handleSubmit = async (e) => {
//             e.preventDefault();
//             try {
//                 // const response = await fetch('https://blogbackend-d377.onrender.com/user/login', {
//                     const response = await fetch('http://localhost:3001/user/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     credentials:'include',
//                     body: JSON.stringify(formData)
//                 });
//                 const data = await response.json();
//                 console.log('Signup successful:', data);
//             } catch (error) {
//                 console.error('Error during signup:', error);
//             }
//         }

//   return (
//     <div>
//     <div className=' h-screen flex items-center justify-center bg-black text-white flex-col gap-4'>
//         <h1 className=' text-4xl font-bold'>Login From</h1>
//         <form onSubmit={handleSubmit} className=' flex flex-col space-y-4 mt-8 w-80'>
//             <label className='flex flex-col'>
//                 Email:
//                 <input onChange={handleChange} type="text" name="email" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' required />
//             </label>
//             <label className='flex flex-col'>
//                 Password:
//                 <input onChange={handleChange}  type="text" name="password" className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' required />
//             </label>
//             <button type='submit' className='mt-4 p-2 bg-green-600 rounded'>Login</button>

//         </form>
//     </div>

//     </div>
//   )
// }

// export default ForLogin