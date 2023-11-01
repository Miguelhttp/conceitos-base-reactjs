import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const footer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '50px',
    position: 'fixed',
    bottom: '0',
    color: '#7D229C',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  }

  const icon = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const icons = {
    marginLeft: '30px',
    fontSize: '24px'
  }

  return (
    <footer style={footer}>
      <p>
        Concebido e construído por <span>Miguel Braga </span>
        com <span>amor e café</span>
      </p>
      
      <div>
        <ul style={icon}>
          <li>
            <FaFacebook style={icons} />
          </li>
          <li>
            <FaInstagram style={icons} />
          </li>
          <li>
            <FaGithub style={icons} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer