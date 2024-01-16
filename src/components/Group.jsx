import React from 'react'

const Group = () => {
  var username = localStorage.getItem('username')

  return (
    <div className='container'>
      <div className='d-flex flex-row'>
        <button style={{
          backgroundColor: '#EDEEF0',
          marginRight: '10px',
          border: 'none',
          padding: '10px',
          borderRadius: '0.5em'
        }}>Write a Post<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_1_839)">
<path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_839">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg></button>
        <button style={{
          backgroundColor: '#2F6CE5',
          border: 'none',
          padding: '10px',
          borderRadius: '0.5em',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px'
        }}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<g clip-path="url(#clip0_1_859)">
<path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_859">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg><p style={{
  margin: 0
}}>Join Group</p></button>
      </div>

      <div style={{
        borderBottom: '1px solid #B8B8B8',
        padding: '5px'
      }} className='d-flex flex-row justify-content-between align-items-center mt-5'>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_1_842)">
        <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black"/>
        <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_842">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
        </svg>Noida, India</div>

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clip-path="url(#clip0_1_848)">
      <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_1_848">
      <rect width="20" height="20" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </div>

      <div style={{
        gap: '5px'
      }} className='d-flex flex-row  justify-content-center mt-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
<g opacity="0.5" clip-path="url(#clip0_1_853)">
<path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_853">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
   <p style={{margin: 0, marginBottom: '50px'}}>
   Your location will help us serve better and extend a personalised experience.
   </p>
      </div>

      <div style={{display: username ? 'block' : 'none'}} className='row'>
        <div style={{ gap: '5px' }} className='d-flex align-items-center mb-3'>
          <img src='/thumb.svg' alt='Thumbnail' />
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>RECOMMENDED GROUPS</h4>
        </div>
        <div style={{ gap: '5px' }} className='d-flex justify-content-between mb-3'>
          <div style={{gap: '5px'}} className='d-flex align-items-center'>
            <img src='/leisure.png' />
            <p style={{ margin: 0 }}>Leisure</p>
          </div>
          
          <button>
          Follow
        </button>
        </div>
        <div style={{ gap: '5px' }} className='d-flex justify-content-between mb-3'>
          <div style={{gap: '5px'}} className='d-flex align-items-center'>
            <img src='/activism.png' />
            <p style={{ margin: 0 }}>Activism</p>
          </div>
          
          <button>
          Follow
        </button>
        </div>
         
        <div style={{ gap: '5px' }} className='d-flex justify-content-between mb-3'>
          <div style={{gap: '5px'}} className='d-flex align-items-center'>
            <img src='/mba.png' />
            <p style={{ margin: 0 }}>MBA</p>
          </div>
          
          <button>
          Follow
        </button>
        </div>

        <div style={{ gap: '5px' }} className='d-flex justify-content-between mb-3'>
          <div style={{gap: '5px'}} className='d-flex align-items-center'>
            <img src='/philosophy.png' />
            <p style={{ margin: 0 }}>Philosophy</p>
          </div>
          
          <button>
          Follow
        </button>
        </div>


      </div>
    </div>
  )
}

export default Group
