import React, {  useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
 //className='block md:hidden'
    const[nave,setNav]=useState(true);
    const handleNav=()=>{
      setNav(!nave) 
    }
   

   
//if nave is not true !nave
//when nave is false, the menu should be visible, and when nave is true, the menu should be hidden.
//when the menu is not open (!nave), it should be visible, and when the menu is open (nave), it should be hidden.
    return (
        <div  className= 'text-white flex justify-between items-center h-24 max-w-[1240px]  mx-auto px-4'>
         <h1 className='w-full font-bold text-3x text-[#00d] '> REACT.</h1>   
         <ul className='flex'>
            <li className='p-4'> home </li>
            <li className='p-4' > company </li>
            <li  className='p-4'> resouces </li>
            <li className='p-4'>   about </li>
            <li className='p-4'>  contact </li>
         </ul>
        
         <div onClick={handleNav}  >
           {!nave ? <AiOutlineClose   size={20} />  :  <AiOutlineMenu  size={20} />}
         </div>
            <div >
            <AiOutlineMenu  size={20} />
            <div className={!nave ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900  ease-in-out duration-500' : 
            'fixed left-[-100%] ' }>
            <h1 className='w-full font-bold text-3x text-[#00d] m-4 '> REACT.</h1>   
            <ul className='  uppercase p-4'>
            <li className=' p-4   border-b border-gray-600'> home </li>
            <li className=' p-4   border-b border-gray-600' > company </li>
            <li  className='p-4   border-b border-gray-600'> resouces </li>
            <li className=' p-4   border-b border-gray-600'>   about </li>
            <li className=' p-4   border-b border-gray-600'>  contact </li>
         </ul>
           </div>
         </div>
        </div>
    );
}

export default Navbar;
