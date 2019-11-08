import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

function MockMenu(props) {
  console.log(props)
  const Layout = () => {
    return (
      <div>
          {props.buttons('back')}       
        {
          props.items.map((item) => {
            return (
              <MenuItem key={item.id} src={item.src}>
                {item.special}
              </MenuItem>
            )
          })
        }
          {props.buttons('next')}
      </div>
    )
  }

  return (
    <div>
      {Layout()}
    </div>
  )
}

export default MockMenu;

MockMenu.propTypes = {
  items: PropTypes.array.isRequired,
  buttons: PropTypes.func
}