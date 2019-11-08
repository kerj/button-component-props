import React from 'react';
import PropTypes from 'prop-types'
import BACK_BUTTON from './img/back_button.png';
import NEXT_BUTTON from './img/next_button.png';

export default function Buttons(props) {
    console.log(props)

    const SubmenuButton = () => (
        <img
            // type="image"
            // alt={menuButton}
            onClick={() => console.log(props.buttonType)}
            src={props.buttonType === 'back' ? BACK_BUTTON : NEXT_BUTTON}
        >
        </img>
    )

    return (
        <SubmenuButton>
            {props.children}
        </SubmenuButton>
    )
}

Buttons.propTypes = {
    buttonType: PropTypes.string.isRequired
}
