import "../styles/Header.css"
const Header = () => {
    return (
        <header>
            <div className="headerWrapper">
                <div><h2>NEXTINVENTIX</h2></div>
                <div className="headerSearchHolder">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="headerIconsHolder">
                    <div className="headerIcons">C</div>
                    <div className="headerIcons">U</div>
                    <div className="headerIcons">M</div>
                </div>
               
            </div>
        </header>
    )
}

export default Header