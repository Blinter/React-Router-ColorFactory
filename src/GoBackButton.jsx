import React from 'react';
import PropTypes from 'prop-types';
import './GoBackButton.css';

function GoBackButton({ navigate }) {
    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <button onClick={handleGoBack} className="go-back-button">
            Go Back
        </button>
    );
}

GoBackButton.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default GoBackButton;