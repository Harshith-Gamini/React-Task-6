import {Link} from "react-router-dom";
function Navbar()
{
    return(
        <nav class="navbar">
            <Link to="" class="navbar-brand" className="name"><h3>Harshith Gamini</h3></Link>
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/projects" class="nav-link">Projects</Link>
                <Link to="/skills" class="nav-link">Skills</Link>
                <Link to="/Work" class="nav-link">Roles</Link>
                <Link to="/contact" class="nav-link">Contact</Link>
            </div>
        </nav>
        
    )
}

export default Navbar;