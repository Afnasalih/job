import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import BG from '../asset/bg.jpg'
import BG2 from '../asset/view.png'
import './Login.css'

const Signup = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('User already exists');
            return;
        }

        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
        onSignup(newUser);
        navigate('/home');
    };


  return (
    <div className='main2h1'>
     <div className='middleh1'>
        <img src={BG} alt='bg' className='imgh1'/>
        <div className='toph1'>
            <div className='lefth1'>
                <img alt='view' className='workh1' src={BG2}/>
            </div>
            <div className='righth1'>
                <div className='midh1'>
              
                <div className='mid2h1'>
                <form onSubmit={handleSignup}>
                        <div className='txt1h1'>Sign up</div>
                        <div className='box1sh1'>
                            <div className='emailh1'>Email Address</div>
                            <input type="email" value={email} className='inputh1' onChange={(e) => setEmail(e.target.value)} 
                        required  />
                        </div>
                        <div className='box1sh1'>
                        <div className='emailh1'>Password</div>
                        <input type="password"  value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                        className='inputh1' />
                        </div>
                        <div className='box1sh1'>
                        <div className='emailh1'>Conform Password</div>
                        <input type="password" value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required  
                        className='inputh1' />
                        </div>
                        <div className='txt2sh1'>
                        <input type='checkbox'/>
                        I Agree with Privacy and Policy</div>
                        <div className='box3h1'>
                            <button type="submit" className='btnh1'>LOGIN</button>
                        </div>
                        <div className='txt3h1'>Already have an Account?<a href="/login"> Login </a> </div>
                        </form>
                    </div>
                
                    
                </div>
            </div>
        </div>
     </div>

    </div>
  )
};
export default Signup;
