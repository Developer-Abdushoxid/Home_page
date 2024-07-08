import { Coin, Logo } from '../assets'

export default function Navbar() {
  return (
    <div className='h-[100vh] w-full bg-gradient-to-r from-blue-400 to-green-500 '>
  <div className=' flex'>
        <img src={Logo} alt="logo" className='h-[150px] w-[150px] p-4  ml-16'/>
        <div className='w-full h-20  flex items-center justify-end gap-28 p-4 ml-20 font-semibold text-lg'>
            {/* <a href="home" className='text-amber-300 hover:text-amber-400'>Home</a>
            <a href="home" className='text-amber-300 hover:text-amber-400'>About</a>
            <a href="home" className='text-amber-300 hover:text-amber-400'>Contact</a>
            <a href="home" className='text-amber-300 hover:text-amber-400'>Contact</a> */}

           <button className='h-[40px] w-24 bg-blue-500 rounded-3xl mr-20 mt-10 text-amber-300 hover:bg-blue-600'>
            Login
           </button>
        </div>    
    </div>
    <div className='w-full h-[40vh]  mt-12 flex items-center justify-between p-32 '>
        <div className='h-[50vh] w-[80vh] mt-[20vh] font-medium text-blue-600'>
        <h2 className='text-5xl'>Welcome Algoritm Coin System</h2>
        <p className='text-2xl mt-12 text-green-600/75 '>This Algoritm learning center <span className='text-amber-400 p-4'>Coin system where you can view change and add coins</span> </p>
        </div>
        
        <div className='mr-32 mt-16'>
            <img src={Coin} alt='LOGO' className='h-[250px] w-[400px]' />
        </div>
    </div>
    <div className='flex items-center gap-12 font-semibold text-lg text-amber-400 '>
    <button className='h-[50px] w-28 bg-blue-500 hover:bg-blue-600 rounded-3xl ml-32'>
            Login
           </button>
           <button className='h-[50px] w-28 bg-blue-500 hover:bg-blue-600 rounded-3xl '>
            Sign In
           </button>
    </div>
    </div>
  
    
  )
}


