import React from 'react';

const Joke = ({ joke }) => {
  return(
      <div>
        <p className="joke">{joke}<span role="img" aria-label="emoji">🤣</span></p>
      </div>
  )
};

export default Joke;

