const Home = () => {
    const handleClick = (e) => {
        console.log("Welcome to my WEB", e);
    };

    const handleClickAgain = (name, e) => {
        console.log(`Hello my name is ${name}`, e);
    };
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=> handleClickAgain('Ubay',e.target)}>Click Again</button>
        </div>
     );
}
 
export default Home;