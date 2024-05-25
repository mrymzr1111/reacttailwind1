import React from 'react';
import financial from "../components/assests/financial.png";
import girls from "../components/assests/girls.png";
import employee from "../components/assests/employee.png";
const Cards = () => {
    return (
    <div className='w-full py-[10rem] px-4 bg-slate-50' >
    <div  className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
  <div className='w-full py-[10rem] px-4 bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ' >
  <img src={financial} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
  <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
<button className='bg-[#f1ff6e] w-[200px]  ml-20  rounded-md font-medium my-6 mx-auto px-6 py-3' > start trial </button>


  </div>

  <div className='w-full py-[10rem] px-4 bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ' >
  <img src={girls} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
  <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
<button className='bg-[#f1ff6e] w-[200px]  ml-20  rounded-md font-medium my-6 mx-auto px-6 py-3' > start trial </button>


  </div>
  <div className='w-full py-[10rem] px-4 bg-white shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ' >
  <img src={employee} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
  <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
<button className='bg-[#f1ff6e] w-[200px]  ml-20  rounded-md font-medium my-6 mx-auto px-6 py-3' > start trial </button>


  </div>

    </div>
    </div>
    );
}

export default Cards;
