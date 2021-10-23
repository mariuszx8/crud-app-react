import React from 'react';
import CampaignForm from '../../Components/CampaignForm/CampaignForm';
import './AddCampaign.scss';

function AddCampaign() {

    return (
        <div>
            <header>
                <span>Add campaign</span>
            </header>
           <CampaignForm
            campaign={{"_id":'',"name":"","keywords":[],"bidAmount":'',"fund":'',"status":false,"town":"","radius":''}}
           />
        </div>
    )
}

export default AddCampaign
