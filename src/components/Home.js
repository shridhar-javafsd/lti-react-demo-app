

const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://images.livemint.com/img/2019/10/21/1600x900/956351fa-32b1-11e9-a3a6-a848e1731c8d_1550426740522_1571637646505.jpg")`,
                backgroundPosition: `cover`
            }}>
            <div className="container"
                style={{
                    minHeight: `100vh`,
                    textShadow: `2px 2px 2px #ffffff`
                }}>
                <p className="display-4 text-primary pt-5" >Welcome to LTI React App</p>
            </div>
        </div>
    );
}

export default Home;