import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


const SignUp=(props)=> {

  const [Creadential, setCreadential] = useState({name:"",email: "",password: ""});
  const navigate = useNavigate();


    const handleSubmit= async(e)=> {
      e.preventDefault();
      const {name,email,password}= Creadential;
   const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
    },
     body: JSON.stringify({name,email,password}), // body data type must match "Content-Type" header
  });
  const json= await response.json(); 
  console.log(json);
  if(json.success){
    //save the auth token and redirect
    localStorage.setItem('token',json.authtoken);
    navigate("/login");
  }

    }

    const onChange=(e)=>{
     
      setCreadential({...Creadential, [e.target.name]: e.target.value});
  }

  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
    <h1>Sign Up</h1>

    <div className="mb-3 my-4">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3 my-4">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"> Password</label>
        <input type="password" className="form-control" id="password"  onChange={onChange} name='password' minlenght={5} required/>
      </div>
    
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword"  onChange={onChange} name='cpassword' minlenght={5} required/>
      </div>
      <button type="submit" className="btn btn-primary">Creat user</button>
    
    </form>
    </div>
        </>
  )
}

export default SignUp