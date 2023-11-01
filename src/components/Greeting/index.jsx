const Greeting = ({ name }) => {
  const GreetingsGenerate = (AllName) => {
    return `Olá, ${AllName}, tudo bem?`
  }

  const text = {
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 25px',
  }

  return (
    <>
      {name && <p style={text}>
        {GreetingsGenerate(name)}
      </p>}
    </>
  )
}

export default Greeting