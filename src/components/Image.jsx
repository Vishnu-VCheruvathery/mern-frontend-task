import React, { useEffect, useState } from 'react'

const Image = () => {
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
    <div style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qB8aMMstObxLBOFA~69GeF~2FBModfxzTZJ9Ga9Hsd-meJw1q1bSQ0LMNaP5FF9kasdVpdPoaCLW5jmCEe0gEwiMjI9B1~44Rz-3tFd5wW1i0Ml-WMC8SEMbwObEy36t67gFKLxDHAIoPBubGZf2dKPy7dL-Y~Y9QHmTKMmCm1d0uoN7ybgHmiiX-kfPT5GAny76jtgq4cG2IUrgpKFGXfYSLC6QPbx5Ad5aAMgJ5lUn6yE0afg9dCt0V4DWI9RpE9RSykKCrJmrC3RbPsn0cCzUwyUJvW45n5XUMs8-shHjtN~W9EplqymUo-x6bc8ggpooust~6RnG6XZzYa7JFA__')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        color: '#fff',
        position: 'relative'
    }}>
      <button style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px solid #fff',
        borderRadius: '0.5em',
        padding: '10px',
        display: isSmallScreen ? 'block' : 'none'
      }}>Join Group</button>

      <div style={{
        position: 'absolute',
        top: isSmallScreen ? '75%' : '70%',
        left: isSmallScreen ? '10px' : '10%'
      }}>
        <h4
        style={{
            fontWeight: '700',
            fontSize: '36px'
        }}
        >Computer Engineering</h4>
        <p
        style={{
            fontWeight: '400',
            fontSize: '18px'
        }}
        >142,765 Computer Engineers follow this</p>
      </div>

    </div>
  )
}

export default Image
