import React, { Component } from 'react';

import ArtistDataCard from '../../components/ArtistDataCard/ArtistDataCard';
import InfluenceList from '../../components/InfluenceList/InfluenceList';

class Influences extends Component {
  render() {
    return (
      <div className='bg-secondary'>
        <ArtistDataCard />
        <InfluenceList title='Influenced' />
        <InfluenceList title='InfluencedBy' />
      </div>
    );
  }
}

export default Influences;
