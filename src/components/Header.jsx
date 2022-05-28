import { Link } from "react-router-dom";


function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
      
    };

    return (
        <header>
          {/* */}
            <nav  style={navStyle}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
                <a href="https://www.guacamolemusic.com/" target="_blank">MUSIC</a>
             

            </nav>
           
            <h1 className="title" target="_blank">My Portfolio Page</h1>
        </header>
    )

};

export default Header;