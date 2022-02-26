import logo from '../assets/img/logo.png';


const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo" />
            <span className="logo__name">windbnb</span>
        </div>
    );
};

export default Logo;
