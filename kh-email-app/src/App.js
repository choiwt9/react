import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import axios from 'axios';

function App() {

const [email, setEmail] = useState("");
const [code, setCode] = useState("");

const authEmail = async ()=> {
  //alert(email)
  //http://localhost:1024/mail
  const response = await axios.post("http://localhost:1024/mail", {
    email: email
  });

  console.log(response);
  if(response.status == 200)
    alert(response.data);
}
const checkCode = async () => {
  const response = await axios.post("http://localhost:1024/check", {
    email: email, code: code
});

 if(response.status == 200)
  alert(response.data);
}

  return (
    <div className="bg-dark p-5 h-100">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-floating">
            <input type="email" 
            className="form-control" 
            id="email" 
            placeholder="name@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label for="email">Email Address</label>
          </div>
        </div>
        <div className="col">
          <button type="button" id="btn-auth" className="btn btn-secondary h-100"
          onClick={authEmail}
          >
			    <span id="spinner" className="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
          	인증 요청          	
          </button>
          &nbsp;<span id="timer" className="text-light"></span>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <div className="form-floating">
            <input type="password" 
            className="form-control" 
            id="authCode" 
            placeholder="Authorization Code"
            value={code}
            onChange={(e)=>setCode(e.target.value)}
            />
            <label for="authCode">Authorization Code</label>
          </div>
        </div>
        <div className="col">
          <button type="button" id="btn-check" className="btn btn-secondary h-100"
          onClick={checkCode}
          >확인</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
