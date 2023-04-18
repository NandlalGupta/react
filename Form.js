import { useState } from "react";
import  '/App.css'
import axios from "axios";


function App(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password})
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleApi = () => {
    console.log({ email, password})
    axios.post('https://63074e603a2114bac75ec5cf.mockapi.io/social-qa',{
      email: email,
      password: password
    })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })


  }
  return(
    <div className="App">
      Email : <input value={email} onChange={handleEmail} />
      Password : <input value={password} onChange={handlePassword} />
      <button onClick={handleApi} >Log in</button>
    </div>

  );


  
}