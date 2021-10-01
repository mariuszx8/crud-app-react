import React from 'react'
import CampaignForm from '../components/CampaignForm';
import '../App.scss';
import './AddCampaign.scss';

function EditCampaign() {
    return (
        <div>
            <header>
                <span>Edit campaign</span>
            </header>
           <CampaignForm/>
        </div>
    )
}

export default EditCampaign
