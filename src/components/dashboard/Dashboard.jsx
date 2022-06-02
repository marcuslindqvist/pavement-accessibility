import React from 'react';
import './Dashboard.css';

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="page-header"></div>
            <div className="page-main">
                {' '}
                <span className="h1">Välkommen{props.user}!</span>
                <br />
                <br />
                <span className="h5">
                    Pavement hjälper dig att tillgänglighets-anpassa din hemsida
                    eller app på 50 olika sätt.
                </span>
                <br />
                <br />
                <span className="h5">
                    Du har hittills bockat av <span className="checked-count-num">12</span> uppgifter
                </span>
                <br />
                <br />
            </div>
        </div>
    );
};
export default Dashboard;
