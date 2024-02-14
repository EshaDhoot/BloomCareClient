import React, { useState, useEffect } from "react";
import axios from "axios";
import './SignUp.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('You made a request');
    let res = await axios.post("http://localhost:4000/BloomCare/signup", inputs);
    
  }

  // const signUp = () => {
  //   alert("Successfully registered");
  // }
  const notify = () => {
    toast.success("Successfully Registered!");
  };


  return (
    <>

      <div className="container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Email address
              <input type="email" className="form-control" placeholder="Email"
                name="email" value={inputs.email}  onChange={handleChange} />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>Password
              <input type="password" className="form-control" placeholder="Password" 
                name="password" value={inputs.password}  onChange={handleChange}/>
            </label>
          </div>
          <div>
      </div>
          <br />
          <div>
          <button input type="submit" className="btn btn-primary" onClick={notify}>Sign up</button>
          <ToastContainer />
          </div>
          <br />
          
          <span> 
            Already have an account ? <Link to='/login'>Login</Link>
          </span>
        </form>
      </div>
    


    </>
  )
}

export default SignUp
