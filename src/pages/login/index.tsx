import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = { user, password }
        axios.post('http://localhost:3000/api/v1/di-ingat/login-with-email', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                console.log('isi response ', response);
            })
            .catch(function (error) {
                console.log('isi error ', error);
            });
    }
    return (
        <div className="bg-white font-family-karla h-screen">
            <Head>
                <title>DiIngat - Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" className="bg-black text-white font-bold text-xl p-4">Logo</a>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Welcome.</p>
                        <form onSubmit={onSubmitHandler} className="flex flex-col pt-3 md:pt-8" >
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Email / No Handphone / Username</label>
                                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <input type="submit" value="Log In"
                                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/random" />
                </div>
            </div>
        </div>
    )
}



export default Login

