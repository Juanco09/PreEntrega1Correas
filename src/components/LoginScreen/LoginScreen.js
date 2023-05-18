import React from 'react'
import './LoginScreen.css'

export const LoginScreen = () => {
  
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log("Submit");
    }
  
  
    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>Log In</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                        type={'text'}
                        className='form-control my-2'
                        placeholder='correo electrónico'
                    />
                    <input
                        type={'text'}
                        className='form-control my-2'
                        placeholder='contraseña'
                    />

                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
  )
}
