import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import { Image } from 'cloudinary-react';
const Profile = () => {


  return (
    <div className="text-center">
     {/* User card - turquoise is small cards to display all, 
     light blue is individual user profile card
        Nav/dash component - orange

 */}
      <Image 
        publicId="ze88x3defkwzubjlhfho"
        width='300'
        crop='scale'
        cloudName='dyvqfdd5w'
      />
    </div>
  );
};

export default Profile;