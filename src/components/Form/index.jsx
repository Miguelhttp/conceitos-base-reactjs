import { useState } from "react"

const Form = () => {
  const cadastrarUsuario = (event) => {
    event.preventDefault()
    console.log(`Cadastrando o usuário: ${name} e sua senha: ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  const formSubmit = {
    padding: "10px 15px",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: 'column',
    margin: '0px 10px',
  }

  const title = {
    color: '#7D229C',
    fontSize: '32px',
    fontWeight: 'bold',
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

  const labelText = {
    color: "#7D229C",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 0px',
  }

  const btn = {
    backgroundColor: "#7D229C",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: '5px 25px',
  }

  return (
    <div>
      <form style={formSubmit} onSubmit={cadastrarUsuario}>
        <h1 style={title}>Form</h1>
        <div>
          <label style={labelText} htmlFor="name">Nome</label>
          <input
            type="text"
            style={inputText}
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label style={labelText} htmlFor="password">Senha</label>
          <input
            style={inputText}
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input style={btn} type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default Form