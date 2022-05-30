const Login = () => {
    

    return (
        <div>
            {isMenuOpen ? (
                <Menu closeThisPage={changeIsMenuOpen} />
            ) : (
                <div></div>
            )}
            <header>
                <Link to="/">
                    <h1>Pavement</h1>
                </Link>
                <button onClick={changeIsMenuOpen}>Menu</button>
            </header>
        </div>
    );
};
export default Login;
