import { FaSearch } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";
import '../assets/style/style.css';

function Header() {
    return(
        <>
        <header data-testid="header-component">
           <nav>
            <div className="logo">
                <a href="/"><LiaEthereum  className="logo-icon"/></a>
            </div>
            <div className="menu-bar">
                <h2>Dashboard</h2>
                 <div className="search">
                     <FaSearch  className="search-icon"/>
                    <input type="text" placeholder="Search"></input>
                 </div>
                 <div className="acount">
                    <ul>
                        <li><MdOutlineLocalPostOffice  className="acount-icon"/></li>
                        <li><FaRegBell className="acount-icon"/></li>
                        <li><FaUser  className="acount-icon user"/></li>
                    </ul>
                 </div>
            </div>

           </nav>

        </header>
        </>
    )
}

export default Header;
