import React from 'react';
// import axios from 'axios';
import CampaignForm from '../components/CampaignForm';
import '../App.scss';
import './AddCampaign.scss';

// Page for entering information about new campaign
function AddCampaign() {

    // const sendData = (event) => {
    //     event.preventDefault();
    //     console.log({
    //         name: event.target.name.value,
    //         keywords: event.target.keywords.value.split(" "),
    //         bidAmount:event.target.bidAmount.value,
    //         fund:event.target.fund.value,
    //         status: event.target.status.value,
    //         town: event.target.town.value,
    //         radius: event.target.radius.value,
    //     })
    //     axios.post("http://192.109.240.27:8080/Campaign_add", {
    //         name: event.target.name.value,
    //         keywords: event.target.keywords.value.split(" "),
    //         bidAmount:event.target.bidAmount.value,
    //         fund:event.target.fund.value,
    //         status: event.target.status.value,
    //         town: event.target.town.value,
    //         radius: event.target.radius.value,
    //     })
    //     .then(res => console.log(res.data));
    // }
    
    return (
        <div>
            <header>
                <span>Add campaign</span>
            </header>
           <CampaignForm/>
        </div>
    )
}

export default AddCampaign
