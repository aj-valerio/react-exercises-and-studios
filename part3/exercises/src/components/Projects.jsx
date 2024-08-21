import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.hikes.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  let hikes = data.hikes;
  let hike = hikes[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{hike.trail} with {hike.companion}
      </h2>
      <img src={hike.photoUrl} alt={hike.alt} />
    </div>
  );
}
