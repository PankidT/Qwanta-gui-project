import { React }  from 'react';
import './dashStyle.css'

function Dashboard() {
    return (
        <div className='body'>
            <div className="main-content">
                <div className="welcome">Welcome, Poramat Chianvichai</div>
                <div className="menu">
                    <div className="exper">
                        <div className="logo-1"></div>
                        <div className="head-1">
                            Graphically build quantum network with 
                            <h1>Qwanta experiment</h1>
                        </div>
                        <button>Lunch Experiment</button>

                    </div>
                    <div className="lab">
                        <div className="logo-2"></div>
                        <div className="head-2">
                            Develop quantum network with
                            <h1>Qwanta Lab</h1>
                        </div>
                        <button>Lunch Lab</button>

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