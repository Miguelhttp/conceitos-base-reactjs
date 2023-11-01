import React from "react";

const MyPeople = ({ name, age, job, photo }) => {
  const container = {
    padding: "10px 15px",
    display: "flex",
    flexDirection: 'column',
    margin: '0px 10px',
  }

  const image = {
    width: '150px',
    borderRadius: '50%',
    margin: '5px 10px',
  }

  const text = {
    color: "#7D229C",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 25px',
  }

  return (
    <React.Fragment>
      <section style={container}>
        <img style={image} src={photo} alt={name} />
        <p style={text}>Name: {name}</p>
        <p style={text}>Age: {age}</p>
        <p style={text}>Job: {job}</p>
      </section>
    </React.Fragment>
  );
}

export default MyPeople;