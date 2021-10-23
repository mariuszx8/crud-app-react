import React from 'react';
import { Link } from 'react-router-dom';
import Campaigns from '../../Components/Campaigns/Campaigns';
import './Home.scss';

function Home() {
    return (
        <>
            <Link to="/AddCampaign" className="btn-add"> 
                + Add campaign
            </Link>
            <main>
                <Campaigns/>
            </main>
        </>
    )
}

export default Home;
