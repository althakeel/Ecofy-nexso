import React from 'react';

const bannerStyles = {
  container: {
    width: '100%',
    height: '400px',
    backgroundImage: 'url("https://res.cloudinary.com/drkfb976p/image/upload/v1750524588/31_o2lqwe.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  leftContent: {
    width: '50%',
    padding: '20px',
    color: '#000',
    maxWidth: '500px',
    textAlign: 'left',
  },
  rightContent: {
    width: '50%',
  },
  text: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  // Responsive style with media queries
  '@media (maxWidth: 768px)': {
    container: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    leftContent: {
      width: '100%',
      textAlign: 'center',
      padding: '10px',
    },
    rightContent: {
      display: 'none',
    },
  },
};

const Banner02 = () => {
  // Handle responsive manually in JS
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      style={{
        ...bannerStyles.container,
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <div
        style={{
          ...bannerStyles.leftContent,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <h3 style={bannerStyles.text}>
          Transform the way you live and work with technology that cares.
        </h3>
      </div>
      <div style={bannerStyles.rightContent} />
    </div>
  );
};

export default Banner02;
