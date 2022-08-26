import Menu from "./Menu";
import SearchBar from "./SearchBar";


const NavBar = ({params}) => {
      return (
  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
          <a className="navbar-brand" href="/" >
        Open Movies Database
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Menu />
                
                <SearchBar {...params} />
            </div>
          </div>
        </nav>
      );
    }
  export default NavBar