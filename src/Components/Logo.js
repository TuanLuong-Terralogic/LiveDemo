import React from 'react';
import brand from '../Asset/img/brand-logo.svg';

const Logo = () => {
    return (
        <div className="brand">
            <img src={brand} alt="Terralogic logo" />
            <br />
            <small>start your personal photo experience</small>
        </div>
    );
};

export default Logo;