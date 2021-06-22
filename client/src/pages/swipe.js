import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import TinderCardComponent from '../components/tindercard2';

const Swipe = () => {


  return (
    <div className="text-center">
     {/* User card - same component as match grid, just larger and individual
Connect dot component - left to right swipe to match
X component - reject user
View profile button component

 */}
 Swipe Options 
 <TinderCardComponent />
    </div>
  );
};

export default Swipe;