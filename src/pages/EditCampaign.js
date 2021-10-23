import React from 'react'
import { useHistory, useLocation } from 'react-router';
import CampaignForm from '../Components/CampaignForm/CampaignForm';

function EditCampaign() {

    const history = useHistory();
    const location = useLocation();
    const campaign = location.state?.campaign;

    if(campaign===undefined) {    
        history.push('/')
        return (
            <>
            </>
        )
    } else {
        return (
            <div>
                <header>
                    <span>Edit campaign</span>
                </header>
               <CampaignForm
                    campaign={campaign}
               />
            </div>
        )
    }
}

export default EditCampaign
