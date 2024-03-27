
import { FaArrowLeftLong } from "react-icons/fa6";
function UserInfo(){
    return(
        <div className="user-info">
                    <div className="user-saldo">
                        <p>Total Balance</p>
                        <h1>$154,10<span>.00</span></h1>
                    </div>
                    <div className="user-tijd">
                        <div className="day">
                            <p>Today</p>
                            <h3>-2.5%</h3>
                            <FaArrowLeftLong className="arrow1" />
                        </div>
                        <div className="day">
                            <p>7 Days</p>
                            <h3>+4.5%</h3>
                            <FaArrowLeftLong className="arrow2" />
                        </div>
                        <div className="day">
                            <p>30 Days</p>
                            <h3>+11.2%</h3>
                            <FaArrowLeftLong className="arrow3" />
                        </div>
                    </div>
                </div>
    )
}
export default  UserInfo; 