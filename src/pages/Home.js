import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import Campaigns from '../components/Campaigns';
import './Home.scss';

// Home page responsible for read function is also homepage for an application
function Home() {
    return (
        <div>
            <Link to="/AddCampaign" className="btn-add"> 
                + Add campaign
            </Link>
            <Campaigns></Campaigns>
        </div>
    )
}

export default Home;
