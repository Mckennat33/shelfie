import { useState } from "react";

const SignUp = () => {
    
    const [ username, setUsername ] = useState()
    const [ email, setEmail ] = useState() 
    const [ password, setPassword ] = useState()

    async function handleSubmit() { 
        const response = await fetch("POST")

    }


    return (
        <>
            <div>
                <form method='POST'>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) => {setUsername(e.target.value)}}
                        type='username'
                        value='username'
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => {setEmail(e.target.value)}}
                        type='email'
                        value='email'
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => {setPassword(e.target.value)}}
                        type='password'
                        value='password'
                    />
                </form>
            </div>
        </>
    )
}