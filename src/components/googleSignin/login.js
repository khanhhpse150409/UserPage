import React, {useState, useEffect} from "react";
import { useRef } from "react";
import {Form, Buttion, Card} from "react-bootstrap";
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from "./config";
import Dashboard from "../dashboard";

function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const [value, setValue] = useState('')
    
    const handleClick = () => {
            signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })

    }
    
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Do you have a acount?
        </div>
        <div>
            {value?<Dashboard/>:
            <button onClick={handleClick}>Signin With Google</button>
            }
        </div>
        </>

    );
}


export default Login;