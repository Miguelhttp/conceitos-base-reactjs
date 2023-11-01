import React from "react"

const ListAnimes = ({ animes }) => {
  const titleList = {
    color: '#7D229C',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '5px 25px',
  }

  const itens = {
    padding: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 20px',
    backgroundColor: '#7D229C',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    width: '300px',
    textAlign: 'center',
    textTransform: 'uppercase'
  }

  return (
    <React.Fragment>
      <h3 style={titleList}>List Anime:</h3>
      {animes.length > 0 ? (
        animes.map((anime) => <p style={itens} key={anime}>{anime}</p>)
      ) : (
        <p style={itens}>Anime not found</p>
      )}
    </React.Fragment>
  )
}

export default ListAnimes