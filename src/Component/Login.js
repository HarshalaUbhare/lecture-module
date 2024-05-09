import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login=(props)=> {

  const [Creadential, setCreadential] = useState({email: "",password: ""}) 
  const navigate = useNavigate();

    const handleSubmit= async(e)=> {
      e.preventDefault();
   
   const response = await fetch(`http://localhost:5000/api/auth/login` , {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
    },
     body: JSON.stringify({email:Creadential.email,password:Creadential.password}), // body data type must match "Content-Type" header
  });
  const json= await response.json(); 
  console.log(json);

  if(json.success){
    //save the auth token and redirect
    localStorage.setItem('token',json.authtoken);
    navigate('/');
    props.showAlert("Logged in Successfully","success")
  }
  else{
    props.showAlert("invalide Credentials","danger")
  }

    }

    const onChange=(e)=>{
     
      setCreadential({...Creadential, [e.target.name]: e.target.value});
  }

  return (
    <>
    <div className="container">
<form onSubmit={handleSubmit}>
<h1>Login</h1>
  <div className="mb-3 my-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={Creadential.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"> Password</label>
    <input type="password" className="form-control" id="password" value={Creadential.password} onChange={onChange} name='password'/>
  </div>

  <button type="submit" className="btn btn-primary">Log in</button>

</form>
</div>
    </>
  )
}

export default Login
