import React from 'react';

const Button = ({ title, onClick , btnType }) => {
    return (
    <button onClick={onClick} className={btnType}>
        {title}
    </button>
    )
};

export default Button;