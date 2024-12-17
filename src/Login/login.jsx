import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Login() {

    const [user, setUser] = useState({
        name: 'emilys',
        password: 'emilyspass'
    })

    const handlechange = (e) => {
        const { name, value } = e.target

        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const onsubmit = (e) => {
        e.preventDefault()
        axios.post('https://dummyjson.com/auth/login', {
            username: user.name,
            password: user.password,
            expiresInMins: 30,
        }, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(async res => {
                const token = res.data.accessToken
                console.log('Token saved:', token);

                Swal.fire({
                    title: "Your account successfully created!",
                    icon: "success"
                })

                try {
                    const getuser = await axios.get('https://dummyjson.com/auth/me', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    })
                    console.log('save user', getuser.data)
                    localStorage.setItem('save user', JSON.stringify(getuser.data))
                } catch (err) {
                    return console.error(err)
                }

            }).catch(err => console.error(err));


    }

    const checkuser = localStorage.getItem('save user');
    let removeButton = () => {
        if(checkuser){
            return <Button variant="contained" className='w-full' onClick={() => localStorage.removeItem('save user')} color='error' > Log out </Button>
        }
    }


    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={onsubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input value={user.name} onChange={handlechange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={user.password} onChange={handlechange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                           <div className='flex gap-4'>
                           <Button variant="contained" className='w-full' type='submit'> Login </Button>
                           {
                            removeButton()
                           }
                           </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login