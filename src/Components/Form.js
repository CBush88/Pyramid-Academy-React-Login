import React, { useState } from 'react'

const Form = ({setToken, users}) => {

    const onSubmit = () =>{
        setToken(authentication)
    }

    const authentication = () => {
        let isAuthenticated = false
        users.forEach(user => {
            if(username === user.username && password === user.password){
                isAuthenticated = true
            }
        })
        return isAuthenticated
    }

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="username">
                Username: 
            </label>
            <input type="text" name="username" id="username" required={true} placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
            <br />
            <label htmlFor="password">
                Password: 
                </label>
            <input type="password" name="password" id="password" required={true} minLength="8" onChange={(e) => setPassword(e.target.value)}></input>
            <br />
            <input type="submit"></input>
            <p>{username}</p>
            <p>{password}</p>
        </form>
    </div>
  )
}

export default Form