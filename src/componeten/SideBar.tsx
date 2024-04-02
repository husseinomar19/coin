import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdNewspaper } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
function SideBar(){
    return(
        <div className="sidedbar">
                <div className="upsidebar">
                    <div className="ithems bezonder">
                        <MdSpaceDashboard className="ithems-icon bezonder"/>
                        <p><Link to="/">DashBoard</Link></p>
                    </div>
                    <div className="ithems">
                        <FaRegUser className="ithems-icon"/>
                        <p><Link to="/test">Account</Link></p>
                    </div>
                    <div className="ithems">
                        <FaChartPie className="ithems-icon"/>
                        <p><Link to="/test2">Chart</Link></p>
                    </div>
                    <div className="ithems">
                        <IoWallet className="ithems-icon"/>
                        <p>Wallet</p>
                    </div>
                    <div className="ithems">
                        <MdNewspaper  className="ithems-icon"/>
                        <p>News</p>
                    </div>
                    <div className="ithems">
                        <IoSettingsSharp  className="ithems-icon"/>
                        <p>Settings</p>
                    </div>
                </div>
                <div className="downsidebar ithems">
                    <MdOutlineLogout className="ithems-icon logout"/>
                    <h3>Log out</h3>
                </div>
            </div>
    )

}
export default SideBar;