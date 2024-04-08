import React from 'react';
import './Explore.css'
import { SKILLS } from '../../utils/data';
import ExploreCard from './ExploreCard/ExploreCard';

const Explore = () => {
  return (
   <section className='skills-container'>
    <h5>EV Olution</h5>

    <div className='skills-content'>
        <div className='skills'>
            {SKILLS.map((item) => (
                <ExploreCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
            />
            ))}
        </div>

        <div className='skills-info'></div>
    </div>
   </section>
  );
}

export default Explore;
