import React, { Fragment, useState } from 'react';
import Notification from '../shared/Notification';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Auth.css'
const Signin = () => {

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setForm({...form,[name]: value});
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        const storedUser = localStorage.getItem("myObject");
        const userObject = JSON.parse(storedUser);
        const { email, password } = userObject;
        if(form.email === email && form.password === password){
            console.log("ogin successful!")
            navigate("/Products"); 
            setSuccess("Login successful!");
            setError("");
            setForm({email: '', password: ''});
            localStorage.setItem("myToken", "True");
            window.location.reload();
          
        }else{
            console.log("Login failed");
            setError("Please provide a valid email and password.");
        	setSuccess("");
            
        }
     
    }

    const handelSignup = (event) => {
        event.preventDefault()
        navigate("/signup");
    }
    
    return (

        <Fragment>
            <div className="container mt-5 login mx-auto">
                <h2>Login </h2>
                {success && <Notification  message={success} type="alert alert-success alert-dismissible fade show"/>}
                {error && <Notification  message={error} type="alert alert-danger alert-dismissible fade show"/>}
    
                <form>
                    <div className="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email"  value={form.email} placeholder="Enter email" onChange={handleInputChange} name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="password">Password:</label>
                        <input type="password" className="form-control" id="password" value={form.password} placeholder="Enter password" onChange={handleInputChange}  name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
                </form>

                <span  class="links" onClick={handelSignup}>Create an account </span>
            </div>
        </Fragment>

    )
};

export default Signin;