import React from 'react';
import './home.css';

const Home = (props) => {
  return( 
  <div
  className='hero-container'
  style={{
    width: "100%",
    height: "100vh",
    backgroundImage: `url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fus.123rf.com%2F450wm%2Fgorgev%2Fgorgev1811%2Fgorgev181100728%2F112908422-attractive-beautiful-couple-is-holding-hands-outdoors-on-a-sunny-day.jpg%3Fver%3D6&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fcouple_holding_hands.html&tbnid=mhXEQVtXuCS8JM&vet=10CIEBEDMooQFqFwoTCMjh9pnE1_ECFQAAAAAdAAAAABAC..i&docid=ldaPbrxgbCvL8M&w=450&h=300&q=couple%20holding%20hands%20real%20images&ved=0CIEBEDMooQFqFwoTCMjh9pnE1_ECFQAAAAAdAAAAABAC')`,
    backgroundPosition: "fixed",
    backgroundSize: "cover",
  }}
>
  <h1>Connect the Dots to True Love...</h1>
  <p>What are you waiting for?</p>
  <div className='home-btns'>
    {/* <Button 
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
      >
      GET STARTED
      </Button> */}
  </div>
  </div>
  )
}

Home.propTypes = {};

export default Home;
