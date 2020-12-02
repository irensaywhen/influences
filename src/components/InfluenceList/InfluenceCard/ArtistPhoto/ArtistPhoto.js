import React from 'react';

import artistPhoto from '../../../../assets/images/CAN.jpg';

const style = {
  backgroundImage: `url(${artistPhoto})`,
  paddingBottom: '100%',
};

const ArtistPhoto = () => {
  return (
    <div className='rounded max-w-full'>
      <div
        style={style}
        className='rounded bg-no-repeat bg-cover bg-center'
      ></div>
    </div>
  );
};

export default ArtistPhoto;
