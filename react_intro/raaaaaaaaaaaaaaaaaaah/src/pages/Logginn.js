import { useState } from 'react';
import axios from 'axios';

export default function Logginn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.get('http://localhost:5000/user/login/' + email + '/' + password);
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
    }

    return (
        <form onSubmit={login}> 
            <label for="email">email:</label> <br />
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
            <label for="password">pasword:</label> <br />
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
            <button>log in</button> <br />
            {user ? <p>{user.user[0].email}</p> : null}
            {user ? <p>{user.user[0].createdAt}</p> : null}
        </form>
    );   
  }