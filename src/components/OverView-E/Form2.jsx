import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { TextField } from "@mui/material";


function Form2(){
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [password2,setPassword2]= useState('');

    const passconf =(event)=>{
       const result =  setPassword2(event.target.value);
       console.log(result);
    }
    const pass= (event)=>{
        const result1 = setPassword(event.target.value);
        console.log(result1);


    }
    const phonae = (event)=>{
        const result3 = setPhone(event.target.value);
        console.log(result3);

    }
    const emailer = (event)=>{
        const result4 = setEmail(event.target.value);
        console.log(result4);

    }
    return(
<div className='form h-1/8  pr-4 '>
    <p className='text-orange-400 font-bold  text-center text-3xl'>Sign Up</p>

   <form action="">







<div className=''>
<TextField id="input" label="E-mail" variant="outlined" />


       <TextField  label="Password" variant="outlined" />
       <TextField id="input" label="Password" variant="outlined" />

       <div className='flex flex-col w-full'></div>
       <div className='flex flex-col w-full '><p className='mt-6  relative -right-10 -bottom-8 text-black  '> Phone </p> <input type="phone" value={phone} onChange={phonae}  className="mr-8 placeholeder-red-800"/> </div>
       <div className='flex flex-col w-full'><p className='mt-6  relative -right-10 -bottom-8 text-black  '> Password </p> <input type="phone" value={password} onChange={pass}  className="mr-8 placeholeder-red-800"/> </div>
       <div className='flex flex-col w-full'><p className='mt-6  relative -right-10 -bottom-8 text-black  '> confirm&nbsp;password </p> <input type="phone" value={password2} onChange={passconf}  className="mr-8 placeholeder-red-800"/> </div>
</div>

<Link to='/Profile'>
<button className='text-white w-40 h-10 mt-2 mx-52'>SignUp</button>
</Link>

<span className='flex flex-row text-center ml-48'><p className='text-black text-center'>Already have an account ?</p><Link to='./Login'><p className='hover:cursor-pointer'>login</p>
</Link></span>

   </form>




</div>


    
)};
export default Form2;
