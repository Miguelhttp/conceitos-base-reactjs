const Button = ({ text, event }) => {
  const btn = {
    backgroundColor: "#7D229C",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: '5px 25px',
  }

  return <button onClick={event} style={btn}>{text}</button>
}

export default Button