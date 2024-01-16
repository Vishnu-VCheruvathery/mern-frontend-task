import React, { useEffect, useState } from 'react'

let datas = [{
  author: 'https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLhOE6-D3K23Gc78~lbxB5Igr8U6aqu1T3ArssCdq2AmZSA7YR~YqWyHcaeQ2gZwnkKMxI2zNhP0NSV7Vk33YZ4rU15Dr7x4n4DDwYVN2kUQhcfbySb~KHb8UX8JsNyw-SnLN86DZq2UQ8U2FYhoxNnvos~EthWFiZYvJ9h21DnftUFr9QgBLlOtJznds4pagSD5eV1lijMer--R97DkrvWSFiTfVowd7QeNPs32BmGEk~RWkcFlILf7ASK~uvzj2QiKoEwymeyIYgc~UnTJ7SG9T8IqArbTXTiYWZv08-SpjN9r9t6iK6IEYeN9CDn5wkj2RFoBtJ4Xa8jThQWW~w__',
  type: '✍️ Article',
  image: 'https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8thbJDJe3tdN4et~OuJqaWPmtGpbNhCcfOfDjyddE8YTMG3AxWcG4tUoe7-Q8XkYXa0BRWP63l3BHuF1AMC3FXB~tmW7YNPXskSo1vHsBbFiIJufReFzDv5~G0k1goHRrfVxGYkcmoxiJHUoAR8M69AgvJre5b3uifG8-E84kHJ5q-NsHlwXL4we0Zcuad~0YNabmpmO-wYwu0EnXX56vgoXx3kvPASnf-a6NV3aKGcKHZj33Gh4ve9EYArkBt4-aBOOl-2BVspk7-UETiZ8jZn3NxDGBiLw3uhhTnmWyoWnanRJvlSSd6YyuSc9BQDKDG-vnbZjPJ-PJBZNx~ZLQ__',
  title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
  paragraph: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
  name: 'Sarthak Kamra',
  views: '1.4k views'
},
{
author: 'https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOcu-jz15qhLO5~o6X5lvfCzoT5orHXZIYcEhbc~o1NSl6dqEJIXv1SxXFFplRW6h~ZmptNyhEmQKSUDI5~0hG~VWRXkY7hywT9knyiTQ3OSPaB3fC8iuKA74s2K65pnjVnnDL1hrZrJN4tqjJwAw6jcj7ObfdwUZu0SH85lxUH2LmYhqvYv5PoOTRqAi7h8hWNLR3e0D6iX5JhOmPQRHX2VE5DRJThRrynjivQnzbAeEUdljiIKjE0o~rErgaH2e86VSb-G31VZrREoudhxEAOKB2Q-fyUmzQzbZUZq8~haLEVTVAtT46GvriMnlyUmyJ2Ju30TkP-iUbN549cBQg__',
type: '🔬️ Education',
image: 'https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hj824a0bt5YvcIbA5TFCwLeeyEWsLgm5wj8VZlqLPya7syFWWO~dB~2mq-yOBk5MjOFKJrFy3DV~FNQz4kJoLMPz2I5VhQUOj0EKy15KrEmmg0DuYRz6B3ac2E47kZ0EMRgqY1WUBfgpC6GEhgHQjW2X1TZuCesHCXJpxaRXJ8T4wxe2ub~4EAcBrJEpZlonSmkjb~o15PjcJQA3BkKksJR5cpSvRb4OgDc4DhytVmFmNiWwqnRcG2TuCJ06KJ7neztYTwH8K88W4TKgoBJzWWkFZSJDouatDGoGy0bkOOPEHbggR1OmTD7CCX--f36Byxhb1DHjmah96Wnnqc4FNg__',
title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
paragraph: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
name: 'Sarah West',
views: '1.4k views'
}
]


const Post = () => {
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
    <div className='container-lg'>
    {isSmallScreen ? (
      <div style={{padding: '10px'}} className='d-flex flex-row justify-content-between'>
        <h3 style={{margin: 0}}>Posts(368)</h3>
        <div className='d-flex align-items-center'>
          <p style={{margin: 0}}>Filters</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337H5.83325Z" fill="#212529"/>
</svg>
        </div>
      </div>
    ) : (
      <div class="d-flex flex-row justify-content-center">
  <div class="p-2">All Posts(32)</div>
  <div class="p-2">Article</div>
  <div class="p-2">Event</div>
  <div class="p-2">Education</div>
  <div class="p-2">Job</div>
</div>
    )}
   
{datas.map((data) => (
  <div className='container ' style={{
    width: isSmallScreen ? '450px' : '692px',
    // marginTop: '30px',
    border: '1px solid #E0E0E0',
    marginBottom: '10px'
  }} >
         <img style={{width: '100%', margin: 0}} src={data.image}/>
         <div>
         <div style={{margin: '10px'}}>
         <h5 style={{
            fontWeight: 500,
            fontSize: '18px'
         }}>
         {data.type}
         </h5>
         <div className='d-flex'>
         <p style={{
            fontWeight: 600,
            fontSize: '22px'
           }}>{data.title}</p>
           
           <div class="dropdown">
            <svg className='dropdown-toggle' data-bs-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black"/>
            </svg>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Edit</button></li>
              <li><button class="dropdown-item" type="button">Report</button></li>
              <li><button class="dropdown-item" type="button">Option 3</button></li>
            </ul>
            </div>
         </div>
         <p>{data.paragraph}</p>
         <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <img 
                style={{
                    borderRadius: '24px',
                    width: '50px',
                    marginRight: '10px'
                    }}
                src={data.author}></img>
                <p style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    margin: 0
                }}>{data.name}</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
            </svg>
            <p style={{
                fontSize: '14px',
                fontWeight: 500,
                margin: 0
            }}>{data.views}</p>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_1_968)">
                <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
            </g>
            <defs>
                <clipPath id="clip0_1_968">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            </button>
            </div>
         </div>
         </div>
         </div>
     </div>
))}
 
<div className='container ' style={{
    width: isSmallScreen ? '450px' : '692px',
    // marginTop: '30px',
    border: '1px solid #E0E0E0',
    marginBottom: '10px'
  }} >
         <img style={{width: '100%', margin: 0}} src='/Car.png'/>
         <div>
         <div style={{margin: '10px'}}>
         <h5 style={{
            fontWeight: 500,
            fontSize: '18px'
         }}>
         🗓️ Meetup
         </h5>
         <div className='d-flex justify-content-between'>
         <p style={{
            fontWeight: 600,
            fontSize: '22px'
           }}>Finance & Investment Elite Social Mixer @Lujiazui</p>

            <div class="dropdown">
            <svg className='dropdown-toggle' data-bs-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black"/>
            </svg>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Edit</button></li>
              <li><button class="dropdown-item" type="button">Report</button></li>
              <li><button class="dropdown-item" type="button">Option 3</button></li>
            </ul>
            </div>
         </div>
         <div className='d-flex'>
          <div className='d-flex me-3'>
            <img src='/calendar.svg'/>
            <p style={{margin: 0}}>Fri, 12 Oct, 2018</p>
          </div>
          <div className='d-flex'>
            <img src='/location.svg'/>
            <p style={{margin: 0}}>Ahmedabad, India</p>
          </div>
         </div>

         <button style={{color: '#E56135', backgroundColor: 'white', border: '0.7px solid #A9AEB8', width: '100%', margin: '10px 0'}}>
         Visit Website
         </button>
         <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <img 
                style={{
                    borderRadius: '24px',
                    width: '50px',
                    marginRight: '10px'
                    }}
                src='/woman.png'></img>
                <p style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    margin: 0
                }}>Ronal Jones</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
            </svg>
            <p style={{
                fontSize: '14px',
                fontWeight: 500,
                margin: 0
            }}>1.4k views</p>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_1_968)">
                <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
            </g>
            <defs>
                <clipPath id="clip0_1_968">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            </button>
            </div>
         </div>
         </div>
         </div>
     </div>
    
     <div className='container ' style={{
    width: isSmallScreen ? '450px' : '692px',
    // marginTop: '30px',
    border: '1px solid #E0E0E0',
    marginBottom: '10px'
  }} >

         <div>
         <div style={{margin: '10px'}}>
         <h5 style={{
            fontWeight: 500,
            fontSize: '18px'
         }}>
         💼️ Job
         </h5>
         <div className='d-flex justify-content-between'>
         <p style={{
            fontWeight: 600,
            fontSize: '22px'
           }}>Software Developer</p>

            <div class="dropdown">
            <svg className='dropdown-toggle' data-bs-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black"/>
            </svg>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" type="button">Edit</button></li>
              <li><button class="dropdown-item" type="button">Report</button></li>
              <li><button class="dropdown-item" type="button">Option 3</button></li>
            </ul>
            </div>
         </div>
         <div className='d-flex'>
          <div className='d-flex me-3'>
            <img src='/work.svg'/>
            <p style={{margin: 0}}>Innovaccer Analytics Private Ltd.</p>
          </div>
          <div className='d-flex'>
            <img src='/location.svg'/>
            <p style={{margin: 0}}>Noida, India</p>
          </div>
         </div>

         <button style={{color: '#02B875', backgroundColor: 'white', border: '0.7px solid #A9AEB8', width: '100%', margin: '10px 0'}}>
         Apply on Timesjobs
         </button>
         <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <img 
                style={{
                    borderRadius: '24px',
                    width: '50px',
                    marginRight: '10px'
                    }}
                src='/man.png'></img>
                <p style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    margin: 0
                }}>Joseph Gray</p>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
            </svg>
            <p style={{
                fontSize: '14px',
                fontWeight: 500,
                margin: 0
            }}>1.4k views</p>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_1_968)">
                <path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
            </g>
            <defs>
                <clipPath id="clip0_1_968">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            </button>
            </div>
         </div>
         </div>
         </div>
     </div>
   
    </div>
  )
}

export default Post
