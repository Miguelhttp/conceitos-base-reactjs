import React from "react"
import PropTypes from 'prop-types'

const Item = ({ brand, launch_year }) => {
  const list = {
    padding: "10px 15px",
    display: "flex",
    flexDirection: 'column',
    margin: '10px 10px',
    backgroundColor: '#7D229C',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    width: '300px',
  }

  return (
    <React.Fragment>
      <li style={list}>{brand} - {launch_year}</li>
    </React.Fragment>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  launch_year: PropTypes.number.isRequired,
}

Item.defaultProps = {
  brand: 'Unknown',
  launch_year: 0,
}

export default Item