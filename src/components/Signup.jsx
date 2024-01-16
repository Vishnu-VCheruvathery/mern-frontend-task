import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import SignIn from './SignIn';


const MODAL_STYLES = {
    position: "fixed",
    display: 'flex',
    gap: '2px',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    border: '1px solid gray',
    borderRadius: '0.5em'
}

const PHONE_STYLE = {
    position: 'fixed',
    display: 'flex',
    gap: '2px',
    flexDirection: 'column',
    bottom: 0,   
    backgroundColor: '#FFF',
    zIndex: 1000,
    border: '1px solid gray',
    borderRadius: '0.5em',
    width: '100%',
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const Signup = ({open, onClose}) => {
    const [isOpen, setIsOpen] = useState(false);
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

  if(!open) return null
  return createPortal(
    <>
      {isSmallScreen ? (
        <div style={OVERLAY_STYLE}>
          <div className='add-modal' style={PHONE_STYLE}>
            <div className='container p-4'>
              <div className='d-flex justify-content-between align-items-center pt-3 mb-4'>
                <h3 style={{margin: 0}}>Create Account</h3>
                <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_1_597)">
                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z" fill="#212529"/>
                </g>
                <defs>
                <clipPath id="clip0_1_597">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </div>

              <div className='row'>
             <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} className='col' placeholder='First Name'></input>
             <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}}  className='col' placeholder='Last Name'></input>
             <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}}  placeholder='Email'></input>
               <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} type='password'  placeholder='Password'></input>
               <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} type='password' placeholder='Confirm Password'></input>
             </div>

             <div className='d-flex mt-3 justify-content-between align-items-center'>
              <button style={{backgroundColor: '#2F6CE5', borderRadius: '20px', border: 'none', color: 'white', padding: '10px 20px'}}>Create Account</button>
              <p onClick={() => setIsOpen(true)} style={{margin: 0 , color: 'blue', cursor: 'pointer'}} >Or Sign-in</p>
              <SignIn open={isOpen} onClose={() => setIsOpen(false)}/>
             </div>
           
             <div className='row mt-3'>
             <button style={{border: '0.6px solid #D9D9DB', backgroundColor: '#FFFFFF', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
               <img src='/fb.png'></img>
               Sign up with Facebook</button> 
               <button style={{border: '0.6px solid #D9D9DB', marginBottom: '20px',  backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
               <img src='/search.png'></img>
               Sign up with Google</button>
               <p style={{margin: 0, fontSize: '11px', textAlign: 'center'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
             </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={OVERLAY_STYLE}></div>
          <button
            style={{
              width: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              position: 'fixed',
              top: '60px',
              right: '330px',
              color: 'black',
              zIndex: 1001,
            }}
            onClick={onClose}
          >
            <img src='/cancel.svg' alt="Cancel" />
          </button>
          <div className='add-modal' style={MODAL_STYLES}>
          <div className='container-fluid'>
     <div style={{textAlign: 'center', backgroundColor: '#EFFFF4', width: '100%', margin: 0}}>
        <p style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#008A45'
        }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
     </div>
     <div className='row'>
        <div className='col p-3'>
        <h3 style={{
            fontSize: '24px',
            fontWeight: 700
        }}>Create Account</h3>
        <div className='container p-3'>
             <div className='row'>
             <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} className='col' placeholder='First Name'></input>
             <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}}  className='col' placeholder='Last Name'></input>
             </div>
             <div className='row'>
               <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}}  placeholder='Email'></input>
               <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} type='password' placeholder='Password'></input>
               <input style={{backgroundColor: '#F7F8FA', color: '#8A8A8A', padding: '5px' , border: '1px solid #D9D9DB'}} type='password' placeholder='Confirm Password'></input>
               <button style={{backgroundColor: '#2F6CE5', borderRadius: '20px', border: 'none', color: 'white', padding: '5px', marginTop: '10px', marginBottom: '10px'}}>Create Account</button>
               <button style={{border: '0.6px solid #D9D9DB', backgroundColor: '#FFFFFF', marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
               <img src='/fb.png'></img>
               Sign up with Facebook</button> 
               <button style={{border: '0.6px solid #D9D9DB',  backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
               <img src='/search.png'></img>
               Sign up with Google</button>
             </div>

             
        </div>
        </div>
        <div style={{
            position: 'relative'
        }} className='col'>
        <p style={{fontSize: '13px', position: 'absolute', right: '10px', display: 'flex', gap: '5px'}}>Already have an account? <p style={{color: '#2F6CE5', cursor: 'pointer'}} onClick={() => setIsOpen(true)}>Sign In</p></p>
            <img style={{
                width: '100%',
                marginTop: '20px'
            }} src='/atg_illustration.png'></img>
            <p style={{fontSize: '11px', fontWeight: 400}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            <SignIn open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
     </div>
    </div>
          </div>
        </>
      )}
    </>,
    document.getElementById('portal')
  );
  }

export default Signup
