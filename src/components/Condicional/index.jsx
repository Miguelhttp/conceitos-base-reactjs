import React, { useState } from "react"

const Condicional = () => {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  const handleClickEmail = (event) => {
    event.preventDefault()
    setUserEmail(email)
  }

  const clearHandleClickEmail = () => {
    setUserEmail('')
  }

  const container = {
    padding: "10px 15px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: 'column',
    margin: '0px 10px',
  }

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

  const btn = {
    backgroundColor: "#7D229C",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: '5px 5px',
  }

  const text = {
    color: "#e0e0e0",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 0px',
  }

  return (
    <div style={container}>
      <h2 style={{ color: 'white' }}>Cadastre o seu e-mail</h2>
      <form>
        <input
          type="email"
          style={inputText}
          placeholder="Seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={btn} onClick={handleClickEmail} type="submit">
          Cadastrar
        </button>
        {userEmail && (
          <React.Fragment>
            <p style={text}>O E-mail cadastrado: {userEmail}</p>
            <button style={btn} onClick={clearHandleClickEmail}>clear</button>
          </React.Fragment>
        )}
      </form>
    </div>
  )
}

export default Condicional