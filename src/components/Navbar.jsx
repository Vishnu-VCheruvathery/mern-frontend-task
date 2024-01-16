import React, { useEffect, useState } from 'react'
import Signup from './Signup';
import SignIn from './SignIn';




const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  var username = localStorage.getItem('username');
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function logout() {
    localStorage.removeItem('username');
    window.location.href = window.location.href;
  }

  return (
    isSmallScreen ? (
      <div class="dropdown container-fluid d-flex justify-content-end p-3">
  <svg className='dropdown-toggle' data-bs-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="51" height="10" viewBox="0 0 51 10" fill="none">
        <path d="M0 -0.00012207H10V9.99988H0V-0.00012207Z" fill="#868E96" />
        <path fillRule="evenodd" clipRule="evenodd" d="M26 9.99988C28.7614 9.99988 31 7.7613 31 4.99988C31 2.23845 28.7614 -0.00012207 26 -0.00012207C23.2386 -0.00012207 21 2.23845 21 4.99988C21 7.7613 23.2386 9.99988 26 9.99988Z" fill="#868E96" />
        <path fillRule="evenodd" clipRule="evenodd" d="M39 -0.00012207H51L45 9.99988L39 -0.00012207Z" fill="#868E96" />
      </svg>

  <ul class="dropdown-menu">
  <li><button onClick={() => setSignUpOpen(true)} class="dropdown-item" type="button">Signup</button></li>
    <li><button onClick={() => setSignInOpen(true)} class="dropdown-item" type="button">Sign-in</button></li>
    <li><button onClick={logout} class="dropdown-item" type="button">Logout</button></li>
  </ul>
  <SignIn open={signInOpen} onClose={() => setSignInOpen(false)}/>
  <Signup open={signUpOpen} onClose={() => setSignUpOpen(false)}/>
</div>
     ):(
      <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <img src='/whole.png' alt='Logo' />
        </div>
        <div className='col-6 p-3 d-flex justify-content-center'>
          <div style={{
            width: '50%',
            border: '1px solid white',
            display: 'flex',
            borderRadius: '0.8em',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            padding: '5px'
          }}>
            <button style={{
              border: 'none',
              padding: '5px',
              width: '10%',
              backgroundColor: '#F2F2F2',
              color: '#b5b5b5'
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input style={{
              width: '100%',
              border: 'none',
              padding: '5px',
              backgroundColor: '#F2F2F2'
            }} placeholder='Search your favourite groups in ATG'></input>
          </div>
        </div>
        <div class="dropdown col d-flex justify-content-end">
  <button class="btn d-flex align-items-center dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {username ? (
   <div style={{gap: '5px'}} className='d-flex align-items-center'>
    <img style={{width: '36px',
height: '36px'}} src='/man.png'/>
    <p style={{margin: 0}}>Siddharth Goyal</p>
   </div>
) : (
  <>
    Create Account. 
    <p style={{ margin: 0, color: '#2F6CE5' }}>&#160;It's free</p>
  </>
)}
  </button>
  <ul class="dropdown-menu">
    <li><button onClick={() => setSignUpOpen(true)} class="dropdown-item" type="button">Signup</button></li>
    <li><button onClick={() => setSignInOpen(true)} class="dropdown-item" type="button">Sign-in</button></li>
    <li><button onClick={logout} class="dropdown-item" type="button">Logout</button></li>
  </ul>
</div>
      </div>
      <SignIn open={signInOpen} onClose={() => setSignInOpen(false)}/>
      <Signup open={signUpOpen} onClose={() => setSignUpOpen(false)}/>
    </div>
    )

    


  )
}

export default Navbar
