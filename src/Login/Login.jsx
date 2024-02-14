import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import '../SignUp/SignUp.css';

export default function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (cookies.jwt) {
  //     navigate("/");
  //   }
  // }, [cookies, navigate]);

  const [inputs, setInputs] = useState({});

  // const generateError = (error) => toast.error(error);
  
//   const notify = (e) => {
//     if(e === 'Successfully logged in'){
//     toast.success(e);
//     }
//     else {
//       toast.error(e);
//     }
//  };
    

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:4000/BloomCare/login", inputs, { withCredentials: true });
      console.log(data)
      console.log(data.message)
      // if (data) {
      //   if (data.errors) {
      //     const { email, password } = data.errors;
      //     if (data.email) generateError(email);
      //     else if (data.password) generateError(password);
      //   } else {
      //     navigate("/");
      //   }
      // }
        if(data.message === 'Successfully logged in'){
          navigate("/");
        }
        else {
        navigate('/signup')
        }
        
    } catch (ex) {
      console.log(ex);
      navigate('/signup')
    }
  };

//  const notify = () => toast.success('Successfully Logged In!!')
  
  return (
    <div>
      {/* <Header /> */}
      {/* ---------------------------------------------------Form starts-------------------------------------- */}
      <div className="container">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label >Email
                      <input type="email" class="form-control" placeholder="Email" autoComplete="email"
                        name="email" value={inputs.email} onChange={handleChange} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Password
                      <input type="password" class="form-control" placeholder="Password" autoComplete="password"
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
                    <ToastContainer />
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
