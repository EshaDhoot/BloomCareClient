import React, { useState, useEffect } from "react";
import axios from "axios";
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  // const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/checkuser");
  //   }
  // }, [cookies, navigate]);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('You made a request');
    try {
      const { data } = await axios.post("http://localhost:4000/BloomCare/signup", inputs, { withCredentials: true });
      // console.log(data.message)
      if (data.message) {
        alert(data.message);
        navigate('/login');
      }

    } catch (error) {
      alert('User already exists')
      console.log(error)

    }

  }

  return (
    <>

      <div className="container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >User Name
              <input type="string" className="form-control" placeholder="User Name" required
                name="name" value={inputs.name} onChange={handleChange} />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label >Email address
              <input type="email" className="form-control" placeholder="Email" required
                name="email" value={inputs.email} onChange={handleChange} />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>Password
              <input type="password" className="form-control" placeholder="Password" required
                name="password" value={inputs.password} onChange={handleChange} />
            </label>
          </div>
          <div>
          </div>
          <br />
          <div>
            <button input type="submit" className="btn btn-primary" >Sign up</button>
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
