import logo from '../images/logo.svg'

const Header = ({winCount}) => {
    return (
        <header className="header">
            <img src={logo} alt="" className="header__img" />
            <div className="scoreboard">
                <div className="scoreboard__text">Score</div>
                <div className="scoreboard__score">{winCount}</div>
            </div>
        </header>
    )
}

export default Header
