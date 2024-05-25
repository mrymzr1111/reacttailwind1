import dataimage from "../components/assests/dataimage.png";
const Anylitics = () => {
    return (
        <div  className='w-full  bg-white py-16 px-4'>
   <div  className='max-w-[1240]  m-auto grid md:grid-cols-2'      >
   <img className='w-[500px] mx-auto my-4' src={dataimage} alt='/' />
   <div>
    <p className="w-full text-emerald-500 font-bold "> DATA ANALYTICS DASHBOARD </p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button  className=' bg-black border-l-orange-300s w-[200px] 
        rounded-md font-medium my-6 mx-auto py-3 text-blue-200' > get started  </button>
   </div>
   </div>
        </div>
    );
}

export default Anylitics;
