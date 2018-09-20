import React from 'react';

const Joke = ({ joke }) => {
  return(
      <div>
        <p className="joke">{joke}🤣</p>
      </div>
  )
};

export default Joke;

