import React, { useState } from 'react'
import logo from '../../../Images/logo.png'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../../actions/userActions'
import LoadingBox from '../LoadingBox/loadingBox'
import { useEffect } from 'react'

function Login() {

    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo, loading, error } = userSignIn;


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(signin(email,password))
    }

    const pathname = window.location.search
    const pathUrl = pathname.split('=')
    const path = pathUrl[1]

    useEffect(()=>{
        if(userInfo){
            if(path){
                navigate(`/${path}`)
            }else{
                navigate('/')
            }
        }
    })

    

    return (
        <div>
            <section>
                <div className="container-login">
                    <div className="logo-container">
                        <h2
                        style={{
                            color: '#558a2e',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            letterSpacing: '1px',
                            fontFamily: 'sans-serif',
                            textAlign: 'center',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                        }}
                        >AgriX</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="login-box">
                            <p className='signin-text'>Sign-In</p>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <div className='loginErrorDiv'><p className='loginErrorContent'>{error} !</p></div> }
                            <label htmlFor="email" className='email-label'>Email address</label>
                            <br />
                            <input type="email" name="email" placeholder="Enter Email Address" className='email-input'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <label htmlFor="password" className='password-label'>Password</label>
                            <br />
                            <input type="password" name="password" className='password-input'
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <button id="login-btn">Continue</button>
                            <br />
                            <p className='privacy-text'>By continuing, you agree to AgriX's Conditions of Use <br />and Privacy Notice.</p>
                            <br />
                            <hr />
                            
                            <button id="create-btn" onClick={(e) => {
                                e.preventDefault()
                                navigate(`/signup?redirect=${path}`)
                            }}>Create your AgriX account</button>

                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;
