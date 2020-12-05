import React, { Component } from 'react';

class Auth extends Component {
  render() {
    const clientId =
      'HP1jLDsRur3BO0mSzS5BJv7SfHVgN-xtLI7XxUSkkclRjiC10C-fvosZ0zmUGVYD';
    const redirectUri = '/';
    const scope = 'me create_annotation manage_annotation vote';
    const state = 'foobar';
    const responseType = 'token';
    return (
      <div>
        <a
          href={`https://api.genius.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&response_type=${responseType}`}
          className='text-white'
        >
          Authenticate
        </a>
      </div>
    );
  }
}

export default Auth;
