import React from 'react';

import ArtistPhoto from './ArtistPhoto/ArtistPhoto';
import ArtistData from './ArtistData/ArtistData';

const InfluenceCard = () => {
  return (
    <div className='bg-white mx-auto rounded shadow-lg'>
      <ArtistPhoto />
      <ArtistData />
    </div>
  );
};

export default InfluenceCard;
