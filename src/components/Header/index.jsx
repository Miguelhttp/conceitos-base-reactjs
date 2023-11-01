import { Link } from "react-router-dom"

const Header = () => {
  const container = {
    backgroundColor: 'black',
    padding: '15px 25px',
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
  }

  const title = {
    color: '#7D229C',
    fontSize: '25px',
    fontWeight: 'bold',
  }

  const links = {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }

  const listLink = {
    marginLeft: '30px',
    color: '#e0e0e0'
  }


  return (
    <header style={container}>
      <h1 style={title}>React Hooks</h1>
      <nav>
        <ul style={links}>
          <li>
            <Link to="/" style={listLink}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={listLink}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={listLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;