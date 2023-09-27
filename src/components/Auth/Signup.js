import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name:"",
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
        localStorage.setItem("myObject", JSON.stringify(form));
        navigate("/signin"); 
    }
    
    return (

        <Fragment>
            <div className="container signup mx-auto mt-5">
                <h2>Signup</h2>
                <form>
                    <div className="mb-3 mt-3">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" value={form.name} name="name" onChange={handleInputChange} />
                    </div>
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
            </div>
        </Fragment>

    )
};

export default Signup;