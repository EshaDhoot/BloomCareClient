import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import '../SignUp/SignUp.css';

export default function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.jwt) {
      navigate("/checkuser");
    }
  }, [cookies, navigate]);

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const  {data}  = await axios.post("http://localhost:4000/BloomCare/login", inputs, { withCredentials: true });
      
      if (data.message) {
        alert(data.message);
        navigate('/')
      }
    } catch (error) {
      alert('Incorrect Credentials');
    }
  }

  return (
    <div>
      {/* <Header /> */}
      {/* ---------------------------------------------------Form starts-------------------------------------- */}
      <div className="container">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label >Email
              <input type="string" class="form-control" placeholder="User Name" autoComplete="name" required
                name="name"  value={inputs.name} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label >Email
              <input type="email" class="form-control" placeholder="Email" autoComplete="email" required
                name="email"  value={inputs.email} onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label>Password
              <input type="password" class="form-control" placeholder="Password" autoComplete="password" required
                name="password" value={inputs.password} onChange={handleChange} />
            </label>
          </div>
          {/* <div class="mb-4">
                    <input type="checkbox" class="form-check-input" id="remember" />
                    <label for="remember" class="form-label">Remember Me</label>
                  </div> */}
          <br />
          <div >
            <button input type="submit" className="btn text-light bg-danger"  >Login</button>

          </div>
          <br />
          <span>
            Don't have an account ? <Link to='/signup'>Sign Up</Link>
          </span>
        </form>
      </div>
    </div>


  )
}
