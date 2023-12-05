import React from 'react';
import './Button-hobby.css';
import './About.css';
import { useTranslation } from 'react-i18next';
export const hobbies=[{
  id:1,
  name:'Valleball',
  imogi:'⛹️‍♀️'
},
{
  id:2,
  name:'Coding',
  imogi:'👩‍💻',
},
{
  id:3,
  name:'Reading',
  imogi:'📖'
},
{
  id:4,
  name:'Traveling',
  imogi:'🧳✈️',
},
{
  id:5,
  name:'Sport',
  imogi:'🏐',
},
{
  id:6,
  name:'Photography',
  imogi:'📸',
},
{
  id:7,
  name:'Cooking',
  imogi:'👩‍🍳🍽️'
},
{
  id:8,
  name:'Extra',
  imogi:'👾'
},
];
// Import the hobbies array

function ButtonHobby() {
  const { t } = useTranslation();

  return (
    <div className='hobbies'>
      {hobbies.map((hobby) => (
        <div key={hobby.id} className="exp-column">
          <button className="glow-on-hover" type="button">
            {hobby.imogi} {t(`hobbies.${hobby.name}`)}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonHobby;
