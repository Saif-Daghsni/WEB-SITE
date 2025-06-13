import { useState } from 'react';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  //const [empty,setEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email==='' || password==='') {
      console.log("Please fill in all fields.");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  }
  return (
    <>  
        <div>
          <h1>Login</h1>
          <p>Welcome to Golden Spoon</p>
          <form onSubmit={handleSubmit}>
            <h4>E-mail</h4>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <h4>Password</h4>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Next</button>
          </form>
        </div>
    </>
  )
}

export default Login

