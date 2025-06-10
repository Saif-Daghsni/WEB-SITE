import { useState } from 'react';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          </form>
          <button type="submit">Next</button>
        </div>
    </>
  )
}

export default Login

