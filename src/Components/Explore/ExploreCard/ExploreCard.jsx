import React from 'react';
import './ExploreCard.css'

const ExploreCard = ({ title, iconUrl, isActive, onClick}) => {
  return (
    <div
    className={`skills-card ${isActive ? "active" : ""}`}
    onClick={()=> onClick()}
    >
        <div className='skills-icon'>
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  );
}

export default ExploreCard;
