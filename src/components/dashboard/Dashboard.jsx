import React from 'react';
import './Dashboard.css';
const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <div className="page-header"></div>
            <div className="page-main">
                {' '}
                <span className="h3">Välkommen{props.user}!</span>
                <br />
                <br />
                <span>
                    Pavement hjälper dig att tillgänglighets-anpassa din hemsida
                    eller app på 50 olika sätt.
                </span>
                <br />
                <br />
                <span>Du har hittills bockat av 12 uppgifter</span>
                <br />
                <br />
                <button className="btn btn-color">Till Checklistan</button>
            </div>
        </div>
    );
};
export default Dashboard;
