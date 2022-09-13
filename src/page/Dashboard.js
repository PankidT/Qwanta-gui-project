import { React }  from 'react';
import './dashStyle.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className='body-dash'>
            <div className="main-content">
                <div className="welcome">Welcome, Poramat Chianvichai</div>
                <div className="menu">
                    <div className="exper">
                        <div className="logo-1">
                            <img src={require('../assets/qwanta-gui.png')} alt="Create qwanta with gui" />
                        </div>
                        <div className="head-1">
                            Graphically build quantum network with 
                            <h1>Qwanta experiment</h1>
                        </div>
                        
                        <Link to="/Experiment">
                            <button>Lunch Experiment</button>
                        </Link>

                    </div>
                    <div className="lab">
                        <div className="logo-2">
                            <img src={require('../assets/qwanta-code.png')} alt="" />
                        </div>
                        <div className="head-2">
                            Develop quantum network with
                            <h1>Qwanta Lab</h1>
                        </div>

                        <Link to="/Lab">
                            <button>Lunch Lab</button>
                        </Link>

                    </div>
                </div>
                <div className="user-job">

                </div>
            </div>
            <div className="notification">
                <h1>Recent notification</h1>
            </div>
        </div>
    )
}

export default Dashboard;