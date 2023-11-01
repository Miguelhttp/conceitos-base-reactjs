const StateLift = ({ setName }) => {
  const inputText = {
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: "normal",
    margin: '5px 25px',
    backgroundColor: 'transparent',
    border: '1px solid #2a2a2a',
    padding: "10px 15px",
    borderRadius: "5px",
  }

  const text = {
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 25px',
  }


  return (
    <div>
      <p style={text}>Digite seu nome:</p>
      <input
        type="text"
        placeholder="Qual é o seu nome"
        style={inputText}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default StateLift