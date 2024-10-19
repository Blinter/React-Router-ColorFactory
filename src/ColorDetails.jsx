import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoBackButton from './GoBackButton';
import initialColors from './initialColors';

function ColorDetails({ colors }) {
  const navigate = useNavigate();
  const [currentColor, setCurrentColor] = useState(initialColors);

  const { color } = useParams();
  useEffect(() => {
    if (!color) {
      navigate('/colors', { replace: true });
      return;
    }
    const foundColor = colors.find(
      (curColor) => curColor.name.toLowerCase() === color.toLowerCase()
    );
    if (foundColor) setCurrentColor(foundColor);
    else navigate('/color', { replace: true });
  }, [color, navigate]);

  useEffect(() => {
    if (currentColor) {
      document.body.style.backgroundColor = currentColor.color;
    }
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [currentColor]);

  return currentColor ? (
    <div>
      <h1>{currentColor.name}</h1>
      <div
        key={currentColor.key}
        style={{ backgroundColor: currentColor.color }}
        alt={currentColor.name}
        width="90%"
        height="90%"
      />
            <GoBackButton navigate={navigate} />
    </div>
  ) : (
    ''
  );
}

ColorDetails.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ColorDetails;