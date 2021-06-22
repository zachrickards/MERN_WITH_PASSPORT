import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    _id: 1,
    name: 'Richard Hendricks',
    url: 'https://via.placeholder.com/200'
  },
  {
    _id: 2,
    name: 'Erlich Bachman',
    url: 'https://via.placeholder.com/200'
  },
  {
    _id: 3,
    name: 'Monica Hall',
    url: 'https://via.placeholder.com/200'
  },
  {
    _id: 4,
    name: 'Jared Dunn',
    url: 'https://via.placeholder.com/200'  },
  {
    _id: 5,
    name: 'Dinesh Chugtai',
    url: 'https://via.placeholder.com/200'
  }
]

export default function TinderCardComponent () {
  const [characters, setCharacters] = useState(db)
  const [matches, setMatches] = useState([]);

  const swiped = (direction, _id) => {
    console.log(direction);
    if(direction === "right") {
        setMatches([...matches, _id])
    }


    console.log(matches, characters)

  }

  const outOfFrame = (_id) => {
    let charactersState = characters.filter(character => character._id !== _id);
    setCharacters(charactersState);
  }


  return (
    <div>
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map(({_id, name, url}, index) =>
          <TinderCard className='swipe' key={_id} onSwipe={(dir) => swiped(dir, _id)} onCardLeftScreen={() => outOfFrame(_id)}>
            <div style={{ backgroundImage: 'url(' + url + ')' }} className='card'>
              <h3>{name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
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