import Button from "../Button";

const Evento = () => {
  const handleClick = () => {
    console.log('Evento disparado!');
  }

  const text = {
    color: "#7D229C",
    fontSize: "16px",
    fontWeight: "bold",
    margin: '5px 25px',
  }

  return (
    <div>
      <p style={text}>Clique para disparar o evento:</p>
      <Button event={handleClick} text="Primeiro evento..." />
    </div>
  );
}

export default Evento;