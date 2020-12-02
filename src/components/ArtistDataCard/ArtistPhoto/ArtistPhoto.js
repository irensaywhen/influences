import React from 'react';

import artistPhoto from '../../../assets/images/kim-gordon.jpg';

const ArtistPhoto = () => {
  return (
    <div className='py-3'>
      <figure className='w-20 md:w-32 h-20 md:h-32 rounded-full overflow-hidden border-4 border-primary'>
        <img src={artistPhoto} className='w-full max-w-full' alt='Artist' />
      </figure>
    </div>
  );
};

export default ArtistPhoto;
