import './Navbar.css'

const Navbar = () => {

  return(
    <nav className="navbar">
      <h1>My React Web</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about"></a>
      </div>
    </nav>
  );
}

export default Navbar;