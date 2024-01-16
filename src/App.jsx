
import { useEffect, useState } from 'react'
import './App.css'
import Group from './components/Group'
import Image from './components/Image'
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     <Navbar />
     <Image />
      {isSmallScreen ? (<div>
         <Post />
      </div>) : (
        <div className='container m-5 '>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
           <Post /> 
        </div>
        <div className='col d-flex justify-content-center'>
           <Group />
        </div>
      </div>
     </div>
      )}
     
    </>
  )
}

export default App
