import React, { useState } from 'react'
import "./tindercard.css";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    _id: 1,
    name: 'Neo',
    url: 'https://media.istockphoto.com/photos/sphynx-cat-wearing-sunglasses-with-green-grass-in-background-picture-id97472202?k=6&m=97472202&s=170667a&w=0&h=UgF8jYaW6rozZNdGTnqfi0ZU9Z_CdN_f26w5mhhqsSA='
  },
  {
    _id: 2,
    name: 'Goldie Wagner',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O9ImNZ_q3a8lRllP7m29nEdW4LUHJlZmvA&usqp=CAU'
  },
  {
    _id: 3,
    name: 'Harry',
    url: 'https://assets.mydogsname.com/wp-content/uploads/2019/10/funny-dog-halloween-costumes-harry-potter-900x626.jpg'
  },
  {
    _id: 4,
    name: 'Ariel',
    url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565913993-51DuxaRPXPL.jpg?crop=1xw:1xh;center,top&resize=480:*'  },
  {
    _id: 5,
    name: 'Jack',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51yL023V6kL._AC_.jpg'
  }
]

export default function TinderCardComponent () {
  const [characters, setCharacters] = useState(db)
  const [yesSwipes, setYesSwipes] = useState([]);
  const [noSwipes, setNoSwipes] = useState([]);


  const swiped = (direction, _id) => {
    console.log(direction);
    if(direction === "right") setYesSwipes(yesSwipes.push(_id));
    if(direction === "left") setNoSwipes(noSwipes.push(_id));
    
    console.log(yesSwipes, noSwipes);
  }



  return (
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard onSwipe={dir => swiped(dir, character._id)} className='swipe' key={character._id}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
  )
}

// import React from 'react';
// import TinderCard from 'react-tinder-card';

// const TinderCardComponent = () => {
//     const onSwipe = (direction) => {
//         console.log('You swiped: ' + direction)
//       }
      
//       const onCardLeftScreen = (myIdentifier) => {
//         console.log(myIdentifier + ' left the screen')
//       }
      
//       return (
//         <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
//       )
// };

// export default TinderCardComponent;