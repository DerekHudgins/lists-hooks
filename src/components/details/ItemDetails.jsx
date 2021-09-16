import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <div>
      {character.name}
      <img src={character.image} />
    </div>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
