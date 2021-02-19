import './Navbar.css'

const Navbar = () => {

  return(
    <nav className="navbar">
      <h1>My React Web</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: '#f7f7f7',
          paddingLeft: '20px',
          paddingRight: '20px',
          backgroundColor: '#f1356d',
          borderRadius: '5px'
        }} >New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;