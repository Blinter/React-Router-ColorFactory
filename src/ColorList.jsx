import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ColorList.css';

const ColorList = ({ colors }) => {
  return (
    <div className="color-list">
      {colors.map(color => (
        <Link
          key={color.name}
          to={`/colors/${color.name.toLowerCase()}`}
          className="color-item"
          style={{ backgroundColor: color.color }}
        >
          {color.name}
        </Link>
      ))}
    </div>
  );
}

ColorList.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired
};


export default ColorList;