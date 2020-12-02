import React from 'react';

import ArtistData from './ArtistData/ArtistData';
import ArtistPhoto from './ArtistPhoto/ArtistPhoto';

const ArtistCard = () => {
  return (
    <div className='container mx-auto text-center'>
      <div className='bg-white mx-auto rounded-lg shadow-lg px-8 inline-flex justify-center items-center'>
        <ArtistPhoto />
        <ArtistData />
      </div>
    </div>
  );
};

export default ArtistCard;
