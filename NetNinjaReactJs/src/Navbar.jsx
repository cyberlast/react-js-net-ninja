const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Kenzy</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/crate" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Block</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
