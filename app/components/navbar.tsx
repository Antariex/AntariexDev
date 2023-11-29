// src/components/Navbar.js
function Navbar() {
    return (
        <nav className="navbar">
            <a href="/"><img src="./favicon-32x32.png" alt="Ariel Antequiera" className="logo"/></a>

            <ul className="menu">
                <li><a href="/about">About me</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
